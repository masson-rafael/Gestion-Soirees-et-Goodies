<?php

namespace App\Http\Controllers;

use App\Models\Soiree;
use Illuminate\Http\Request;

class SoireeController extends Controller
{
    public function index()
    {
        return Soiree::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'lieu' => 'required|string',
            'date_heure' => 'required|date',
            'prix' => 'required|numeric',
            'capacite_max' => 'required|integer',
            'theme' => 'required|string',
        ]);

        return Soiree::create($request->all());
    }

    public function show(Soiree $soiree)
    {
        return $soiree->load('reservations');
    }

    public function update(Request $request, Soiree $soiree)
    {
        $soiree->update($request->all());
        return $soiree;
    }

    public function destroy(Soiree $soiree)
    {
        $soiree->delete();
        return response()->json(['message' => 'Soirée supprimée avec succès']);
    }
}
