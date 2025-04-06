<?php

use App\Http\Controllers\GoodieController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SoireeController;
use Illuminate\Support\Facades\Route;


Route::apiResource('soirees', SoireeController::class);
Route::apiResource('reservations', ReservationController::class);
Route::apiResource('goodies', GoodieController::class);