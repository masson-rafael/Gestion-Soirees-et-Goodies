import { Goodie } from "./goodie.model";
import { Soiree } from "./soiree.model";

export class Reservation {
    id?: number;
    nom_etudiant!: string;
    email!: string;
    telephone!: string;
    soiree_id?: number; // ID de la soirée réservée
    statut?: 'Confirmée' | 'En attente' | 'Annulée';
    date_reservation?: string;
    soiree?: Soiree; // Optionnel, si on charge les détails de la soirée
    goodies?: Goodie[]; // Liste des goodies attribués (optionnel)

    constructor(id: number, nom_etudiant: string, email: string, telephone: string, soiree_id: number, statut: 'Confirmée' | 'En attente' | 'Annulée', date_reservation: string, soiree?: Soiree, goodies?: Goodie[]) {
        if (id !== undefined) {this.id = id;}
        this.nom_etudiant = nom_etudiant;
        this.email = email;
        this.telephone = telephone;
        if (soiree_id !== undefined){this.soiree_id = soiree_id;}
        if (statut !== undefined) {this.statut = statut;}
        if (date_reservation !== undefined) { this.date_reservation = date_reservation;}
        if (soiree !== undefined) {this.soiree = soiree;}
        if (goodies !== undefined) {this.goodies = goodies;}
    }
}