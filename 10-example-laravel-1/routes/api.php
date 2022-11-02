<?php

use App\Http\Controllers\ClientesController;
use App\Http\Controllers\FacturasController;
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


Route::get('/get_excel_clientes', [ClientesController::class, 'downloadExcel'])->name('clientes.downloadExcel');
Route::get('/store_excel_clientes', [ClientesController::class, 'storeExcel'])->name('clientes.storeExcel');

Route::get('/get_pdf_clientes', [ClientesController::class, 'getPdf'])->name('clientes.getPdf');
Route::get('/view_pdf_clientes', [ClientesController::class, 'viewPdf'])->name('clientes.viewPdf');

Route::get('/facturas', [FacturasController::class, 'index'])->name('facturas.index');
Route::get('/facturas/{factura}', [FacturasController::class, 'show'])->name('facturas.show');
Route::post('/facturas', [FacturasController::class, 'store'])->name('facturas.store');
Route::put('/facturas/{factura}', [FacturasController::class, 'update'])->name('facturas.update');
Route::delete('/facturas/{factura}', [FacturasController::class, 'delete'])->name('facturas.delete');
Route::get('/clientes/{cliente}/facturas', [FacturasController::class, 'getFacturasByCliente'])->name('clientes.getFacturasByCliente');




Route::get('/clientesyfacturas', [FacturasController::class, 'getFacturasAndNombreCliente'])->name('clientes.getFacturasAndNombreCliente');

