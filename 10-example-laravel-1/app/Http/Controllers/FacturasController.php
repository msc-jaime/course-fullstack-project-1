<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Factura;
use App\Models\Cliente;

class FacturasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Factura::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'numero_factura' => 'required',
            'fecha_vencimiento' => 'required|string',
            'id_cliente' => 'required',
        ]);
        return Factura::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Factura $factura)
    {
        return $factura;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Factura $factura)
    {
        $validated = $request->validate([
            'numero_factura' => 'required',
            'fecha_vencimiento' => 'required|string',
            'id_cliente' => 'required',
        ]);
        return $factura->fill($validated)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Factura $factura)
    {
        return $factura->delete();
    }


    /**
     * @param Cliente $cliente
     *
     * @return [type]
     */
    public function getFacturasByCliente(Cliente $cliente) {
        return Factura::where('id_cliente', strval($cliente->id))->get();
    }


    public function getFacturasAndNombreCliente(Cliente $cliente) {
        return Factura::select(
                'facturas.id',
                'facturas.numero_factura',
                'facturas.fecha_vencimiento',
                'facturas.id_cliente',
                'clientes.name',
                'clientes.lastName'
            )->join(
                'clientes', 'clientes.id', '=', 'facturas.id_cliente'
            )->orderBy('id_cliente', 'ASC')
            ->get();
    }

}
