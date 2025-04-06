<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('nom_etudiant');
            $table->string('email')->unique();
            $table->string('telephone');
            $table->foreignId('soiree_id')->constrained('soirees')->onDelete('cascade');
            $table->dateTime('date_reservation')->useCurrent();
            $table->enum('statut', ['Confirmée', 'En attente', 'Annulée'])->default('En attente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
