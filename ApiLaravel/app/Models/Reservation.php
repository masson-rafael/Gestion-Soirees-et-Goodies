<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_etudiant', 'email', 'telephone', 'soiree_id', 'statut'
    ];

    public function soiree()
    {
        return $this->belongsTo(Soiree::class);
    }

    public function goodies()
    {
        return $this->belongsToMany(Goodie::class, 'reservation_goodies')->withPivot('quantite');
    }
}
