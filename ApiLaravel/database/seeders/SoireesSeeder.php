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
                'nom' => 'Soirée Fluo',
                'lieu' => 'Club XYZ',
                'date_heure' => '2025-05-10 22:00:00',
                'prix' => 10.00,
                'capacite_max' => 200,
                'theme' => 'Fluo',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nom' => 'Bal de Promo',
                'lieu' => 'Salle des Fêtes',
                'date_heure' => '2025-06-15 20:00:00',
                'prix' => 20.00,
                'capacite_max' => 300,
                'theme' => 'Chic',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
