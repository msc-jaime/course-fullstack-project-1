<?php

namespace App\Http\Controllers;

use App\Exports\ClientesExport;
use Illuminate\Http\Request;
use App\Models\Clientes;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;

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


    /**
     * @return .xlsx
     */
    public function downloadExcel()
    {
        return Excel::download(new ClientesExport, 'clientes.xlsx');
    }

    /**
     * @return (0) false (1) true
     */
    public function storeExcel()
    {
        return Excel::store(new ClientesExport, 'clientes.xlsx', 'public');
    }

    /**
     * @return .pdf
     */
    public function getPdf() {
        $data = "Hola mundo";
        $clientes = Clientes::all();
        $pdf = Pdf::loadView('pdf.clientes', compact('data', 'clientes'));
        return $pdf->download('clientes.pdf');
    }


    public function viewPdf() {
        $pdf = Pdf::loadHTML('<h1>Test</h1>');
        return $pdf->stream();
    }
}
