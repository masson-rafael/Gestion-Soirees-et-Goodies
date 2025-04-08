import { Component, ViewChild } from '@angular/core';
import { GoodieService } from '../services/goodie.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Goodie } from '../models/goodie.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-goodies',
  standalone: false,
  templateUrl: './goodies.component.html',
  styleUrl: './goodies.component.scss'
})
export class GoodiesComponent {
  displayedColumns: string[] = ['id', 'nom', 'quantite', 'description', 'cout', 'action'];
  dataSource = new MatTableDataSource<Goodie>([]);
  goodiesActuel!: Goodie;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private myGoodiesService: GoodieService, private router: Router) {}

  ngOnInit() {
    // Récupérer les goodies et les assigner à la source de données
    this.myGoodiesService.getGoodies().subscribe((goodies: Goodie[]) => {
      this.dataSource.data = goodies;

      if (this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteGoodie(id: number): void {
    this.myGoodiesService.deleteGoodie(id).subscribe({
      next: () => {
        console.log('Goodie supprimé avec succès');
        this.router.navigateByUrl('/goodies');
      },
      error: err => {
        console.error('Erreur lors de la suppression du goodie : ' + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    });
  }

  editQuantity(row: any): void {
    row.editMode = true;
    row.newQuantite = row.quantite;
  }

  saveQuantity(row: any): void {
    const updatedItem = {
      ...row,
      quantite: row.newQuantite
    };
    
    this.myGoodiesService.updateGoodie(updatedItem).subscribe({
      next: (result) => {
        row.quantite = row.newQuantite;
        row.editMode = false;
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour:', error);
      }
    });
  }

  cancelEdit(row: any): void {
    row.editMode = false;
  }
}
