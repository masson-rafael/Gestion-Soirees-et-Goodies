<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Soiree;

class SoireesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Soiree::insert([
            [
                'nom' => 'Soirée Fluo Party',
                'lieu' => 'Club Neon, Campus Nord',
                'date_heure' => '2025-04-15 21:00:00',
                'prix' => 5,
                'capacite_max' => 150,
                'theme' => 'Fluo'
            ],
            [
                'nom' => 'Bal de Promo 2025',
                'lieu' => 'Salle des Fêtes du Campus',
                'date_heure' => '2025-05-10 20:00:00',
                'prix' => 15,
                'capacite_max' => 300,
                'theme' => 'Chic & Glam'
            ],
            [
                'nom' => 'Soirée Années 90',
                'lieu' => 'Retro Club, Centre-Ville',
                'date_heure' => '2025-04-25 22:00:00',
                'prix' => 8,
                'capacite_max' => 200,
                'theme' => 'Vintage'
            ],
            [
                'nom' => 'Soirée Déguisée',
                'lieu' => 'BDE Hall Campus Est',
                'date_heure' => '2025-04-20 20:30:00',
                'prix' => 6,
                'capacite_max' => 180,
                'theme' => 'Costume Libre'
            ],
            [
                'nom' => 'Soirée Beach Party',
                'lieu' => 'Piscine Universitaire',
                'date_heure' => '2025-06-05 19:00:00',
                'prix' => 10,
                'capacite_max' => 250,
                'theme' => 'Plage & Cocktails'
            ],
        ]);
    }
}
