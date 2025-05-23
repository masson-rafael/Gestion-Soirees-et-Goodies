<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class ReservationController extends Controller
{
    public function index()
    {
        return Reservation::with('soiree', 'goodies')->get();
    }

    public function store(Request $request)
    {

        Log::debug('Données reçues :', $request->all());

        $validatedData = $request->validate([
            'nom_etudiant' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
            'soiree_id' => 'required|exists:soirees,id',
        ]);

        $reservation = Reservation::create($validatedData);

        return response()->json($reservation, 201);
    }

    public function show($id)
    {
        $reservation = Reservation::with('soiree', 'goodies')->find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        return response()->json($reservation, 200);
    }

    public function update(Request $request, $id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        $reservation->update($request->all());
        return response()->json($reservation, 200);
    }

    public function destroy($id)
    {
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['message' => 'Réservation non trouvée'], 404);
        }

        $reservation->delete();
        return response()->json(['message' => 'Réservation supprimée'], 200);
    }
}
