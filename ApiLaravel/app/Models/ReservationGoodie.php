<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ReservationGoodie extends Pivot
{
    use HasFactory;

    protected $table = 'reservation_goodies';

    protected $fillable = ['reservation_id', 'goodie_id', 'quantite'];
}
