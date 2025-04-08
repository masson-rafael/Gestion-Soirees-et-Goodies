import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Goodie } from '../models/goodie.model';
import { GoodieService } from '../services/goodie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-goodie',
  standalone: false,
  templateUrl: './new-goodie.component.html',
  styleUrl: './new-goodie.component.scss'
})
export class NewGoodieComponent {
  nom!: FormControl;
  quantite!: FormControl;
  description!: FormControl;
  cout_unitaire!: FormControl;
  formulaire!: FormGroup;
  currentGoodie!: Goodie;

  constructor(private goodieService: GoodieService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.nom = new FormControl('', [Validators.required, Validators.minLength(2)]);
    this.quantite = new FormControl('', [Validators.required, Validators.min(2)]);
    this.description = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.cout_unitaire = new FormControl('', [Validators.min(0)]);

    this.formulaire = this.formBuilder.group({
      nom: this.nom,
      quantite: this.quantite,
      description: this.description,
      cout_unitaire: this.cout_unitaire,
    },
    {updateOn: 'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue) => {
      this.currentGoodie = {
        nom: formValue.nom,
        quantite: formValue.quantite,
        description: formValue.description,
        cout_unitaire: formValue.cout_unitaire,
      };
    });
  }

  onNewGoodie(): void {
    let newGoodie: Goodie = {
      nom: this.formulaire.get('nom')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      description: this.formulaire.get('description')?.value,
      cout_unitaire: this.formulaire.get('cout_unitaire')?.value,
    };

    this.goodieService.addGoodie(newGoodie).subscribe({
      next: goodie =>
      {
        this.router.navigateByUrl('/goodies')
      },
      error: err =>
      {
        console.error('Observable ajout reservation a émis une erreur : ' + err);
        alert("Désolé la reservation n'a pas pu être ajoutée");
      }
    });
  };
}
