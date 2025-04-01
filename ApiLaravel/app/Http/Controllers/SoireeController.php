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

    public function show($id)
    {
        $soiree = Soiree::with('reservations')->find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée non trouvée'], 404);
        }

        return response()->json($soiree, 200);
    }

    public function update(Request $request, $id)
    {
        $soiree = Soiree::find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée non trouvée'], 404);
        }

        $soiree->update($request->all());
        return response()->json($soiree, 200);
    }

    public function destroy($id)
    {
        $soiree = Soiree::find($id);

        if (!$soiree) {
            return response()->json(['message' => 'Soirée non trouvée'], 404);
        }

        $soiree->delete();
        return response()->json(['message' => 'Soirée supprimée avec succès'], 200);
    }
}
