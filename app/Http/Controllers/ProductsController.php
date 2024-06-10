<?php

namespace App\Http\Controllers;

use App\Models\Products;
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
        $products = Products::all();

        return Inertia::render('Dashboard/Products/Index', [
            'products' => $products
        ]);
    }

    public function dashboardCreatePage()
    {
        return Inertia::render('Dashboard/Products/Create');
    }
}
