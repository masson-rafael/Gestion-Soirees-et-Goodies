<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Goodie;

class GoodiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Goodie::insert([
            [
                'nom' => 'Bracelet',
                'quantite' => 100,
                'description' => 'Bracelet fluorescent pour la soirée.',
                'cout_unitaire' => 1.50,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nom' => 'T-shirt',
                'quantite' => 50,
                'description' => 'T-shirt édition spéciale soirée BDE.',
                'cout_unitaire' => 20.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
