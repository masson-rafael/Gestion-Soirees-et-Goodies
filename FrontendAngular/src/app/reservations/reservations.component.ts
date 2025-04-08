import { Component, ViewChild } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from '../services/reservation.service';
import { Router } from '@angular/router';
import { SoireeService } from '../services/soiree.service';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-reservations',
  standalone: false,
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  displayedColumns: string[] = ['id', 'nom_etudiant', 'email', 'telephone', 'nom_soiree', 'date_reservation', 'statut', 'goodies', 'action'];
  dataSource = new MatTableDataSource<Reservation>([]);
  soirees: Soiree[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private reservationService: ReservationService, private router: Router, private soireeService: SoireeService) {}

  ngOnInit() {
    this.soireeService.getSoirees().subscribe((soirees: Soiree[]) => {
      this.soirees = soirees;
    });


    this.reservationService.getReservations().subscribe((reservations: Reservation[]) => {
      this.dataSource.data = reservations.map(res => ({
        ...res,
        nom_soiree: this.soirees.find(s => s.id === res.soiree_id)?.nom || 'Inconnu'
      }));

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

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/reservations');
      },
      error: err => {
        console.error('Erreur lors de la suppression de la réservation : ' + (err.error?.message || JSON.stringify(err)));
        alert('Une erreur est survenue : ' + (err.error?.message || JSON.stringify(err)));
      }
    });
  }
}
