import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Reservation } from '../models/reservation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SoireeService } from '../services/soiree.service';

@Component({
  selector: 'app-new-reservation',
  standalone: false,
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent {
  nomSoiree!: string;
  nom_etudiant!: FormControl;
  email!: FormControl;
  telephone!: FormControl;
  formulaire!: FormGroup;
  currentReservation!: Reservation;

  constructor(private soireeService: SoireeService, private reservationService: ReservationService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.soireeService.getSoireeById(this.route.snapshot.params['id']).subscribe((data) => {this.nomSoiree = data.nom;});
    this.nom_etudiant = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.telephone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

    this.formulaire = this.formBuilder.group({
      nom_etudiant: this.nom_etudiant,
      email: this.email,
      telephone: this.telephone,
    },
    {updateOn: 'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentReservation = {
        nom_etudiant: formValue.nom_etudiant,
        email: formValue.email,
        telephone: formValue.telephone,
      };
    });
  }

  onNewReservation(): void {
    let newReservation: Reservation = {
      nom_etudiant: this.formulaire.get('nom_etudiant')?.value,
      email: this.formulaire.get('email')?.value,
      telephone: this.formulaire.get('telephone')?.value,
      soiree_id: this.route.snapshot.params['id'],
    };

    this.reservationService.addReservation(newReservation).subscribe({
      next: reservation =>
      {
        this.router.navigateByUrl('/reservations');
      },
      error: err =>
      {
        console.error('Observable ajout reservation a émis une erreur : ' + err);
        alert("Désolé la reservation n'a pas pu être ajoutée");
      }
    });
  };

}
