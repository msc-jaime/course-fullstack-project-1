<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clientes;


class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Clientes::all();
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
            'name' => 'required|min:3|max:255',
            'lastName' => 'required|min:3|max:255',
            'address' => 'required',
            'email' => 'required|unique:clientes|email'
        ]);
        return Clientes::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Clientes $cliente)
    {
        return $cliente;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Clientes $cliente)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:255',
            'lastName' => 'required|min:3|max:255',
            'address' => 'required',
            'email' => 'required|email'
        ]);
        return $cliente->fill($validated)->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Clientes $cliente)
    {
        return $cliente->delete();
    }
}
