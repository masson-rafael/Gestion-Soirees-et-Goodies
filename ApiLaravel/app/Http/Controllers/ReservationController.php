<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        return Reservation::with('soiree', 'goodies')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom_etudiant' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'soiree_id' => 'required|exists:soirees,id',
            'statut' => 'required|in:Confirmée,En attente,Annulée',
        ]);

        return Reservation::create($request->all());
    }

    public function show(Reservation $reservation)
    {
        return $reservation->load('soiree', 'goodies');
    }

    public function update(Request $request, Reservation $reservation)
    {
        $reservation->update($request->all());
        return $reservation;
    }

    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
        return response()->json(['message' => 'Réservation supprimée']);
    }
}
