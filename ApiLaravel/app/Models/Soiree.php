<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soiree extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'lieu', 'date_heure', 'prix', 'capacite_max', 'theme'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
