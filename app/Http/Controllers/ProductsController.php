<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/Index');
    }

    public function detail()
    {
        return Inertia::render('Products/Detail');
    }
}
