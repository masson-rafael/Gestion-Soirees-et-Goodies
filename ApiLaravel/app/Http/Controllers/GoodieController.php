<?php

namespace App\Http\Controllers;

use App\Models\Goodie;
use Illuminate\Http\Request;

class GoodieController extends Controller
{
    public function index()
    {
        return Goodie::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'quantite' => 'required|integer',
            'description' => 'nullable|string',
            'cout_unitaire' => 'nullable|numeric',
        ]);

        return Goodie::create($request->all());
    }

    public function show($id)
    {
        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie non trouvé'], 404);
        }

        return response()->json($goodie, 200);
    }

    public function update(Request $request, $id)
    {
        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie non trouvé'], 404);
        }

        $goodie->update($request->all());
        return response()->json($goodie, 200);
    }

    public function destroy($id)
    {
        $goodie = Goodie::find($id);

        if (!$goodie) {
            return response()->json(['message' => 'Goodie non trouvé'], 404);
        }

        $goodie->delete();
        return response()->json(['message' => 'Goodie supprimé'], 200);
    }
}
