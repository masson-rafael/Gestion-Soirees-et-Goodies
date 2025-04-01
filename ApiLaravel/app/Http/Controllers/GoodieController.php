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

    public function show(Goodie $goodie)
    {
        return $goodie;
    }

    public function update(Request $request, Goodie $goodie)
    {
        $goodie->update($request->all());
        return $goodie;
    }

    public function destroy(Goodie $goodie)
    {
        $goodie->delete();
        return response()->json(['message' => 'Goodie supprimé']);
    }
}
