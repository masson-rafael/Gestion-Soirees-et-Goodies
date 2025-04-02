export class Goodie {
    id!: number;
    nom!: string;
    quantite!: number;
    description!: string;
    cout_unitaire?: number;

    constructor(id: number, nom: string, quantite: number, description: string, cout_unitaire: number) {
        this.id = id;
        this.nom = nom;
        this.quantite = quantite;
        this.description = description;
        if (cout_unitaire !== undefined) {
            this.cout_unitaire = cout_unitaire;
        }
    }
}