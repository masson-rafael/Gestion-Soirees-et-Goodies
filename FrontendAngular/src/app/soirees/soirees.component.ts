import { Component } from '@angular/core';
import { SoireeService } from '../services/soiree.service';
import { Soiree } from '../models/soiree.model';

@Component({
  selector: 'app-soirees',
  standalone: false,
  templateUrl: './soirees.component.html',
  styleUrl: './soirees.component.scss'
})
export class SoireesComponent {
  soirees: Soiree[] = [];

  constructor(private soireeService: SoireeService) {}

  ngOnInit(): void {
    this.soireeService.getSoirees().subscribe((data) => {this.soirees = data;});
  }
}
