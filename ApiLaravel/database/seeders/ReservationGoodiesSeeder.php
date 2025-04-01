<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ReservationGoodie;

class ReservationGoodiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReservationGoodie::insert([
            [
                'reservation_id' => 1,
                'goodie_id' => 1,
                'quantite' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'reservation_id' => 2,
                'goodie_id' => 2,
                'quantite' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
