<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reservation;

class ReservationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Reservation::insert([
            [
                'nom_etudiant' => 'Alice Dupont',
                'email' => 'alice.dupont@example.com',
                'telephone' => '0601020304',
                'soiree_id' => 1,
                'date_reservation' => now(),
                'statut' => 'Confirmée',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nom_etudiant' => 'Jean Martin',
                'email' => 'jean.martin@example.com',
                'telephone' => '0605060708',
                'soiree_id' => 2,
                'date_reservation' => now(),
                'statut' => 'En attente',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
