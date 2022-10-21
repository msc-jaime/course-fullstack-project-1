<?php

use App\Http\Controllers\ClientesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::apiResource('clientes', ClientesController::class);


Route::get('/clientes', [ClientesController::class, 'index'])->name('clientes.index');
Route::get('/clientes/{cliente}', [ClientesController::class, 'show'])->name('clientes.show');
Route::post('/clientes', [ClientesController::class, 'store'])->name('clientes.store');
Route::put('/clientes/{cliente}', [ClientesController::class, 'update'])->name('clientes.update');
Route::delete('/clientes/{cliente}', [ClientesController::class, 'delete'])->name('clientes.delete');

