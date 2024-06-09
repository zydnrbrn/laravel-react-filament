<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Repositories\Eloquent\ProductsReporitory;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        $list = Products::all();

        return Inertia::render('Products/Index', [
            'products' => $list
        ]);
    }

    public function detail($id)
    {
        $product = Products::find($id);

        return Inertia::render('Products/Detail', [
            'product' => $product
        ]);
    }

    public function list()
    {
        return Inertia::render('Dashboard/Products/Index');
    }
}
