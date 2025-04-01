<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goodie extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom', 'quantite', 'description', 'cout_unitaire'
    ];

    public function reservations()
    {
        return $this->belongsToMany(Reservation::class, 'reservation_goodies')->withPivot('quantite');
    }
}
