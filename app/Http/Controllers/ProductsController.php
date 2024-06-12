<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index()
    {
        try {
            $list = Products::all();

            return Inertia::render('Products/Index', [
                'products' => $list
            ]);
        } catch (\Exception $e) {
            return Inertia::render('Products/Index', []);
        }
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
        try {
            $list = Products::all();

            return Inertia::render('Dashboard/Products/List', [
                'products' => $list
            ]);
        } catch (\Exception $e) {
            return Inertia::render('Dashboard/Products/List', []);
        }
    }

    public function dashboardCreatePage()
    {
        try {
            return Inertia::render('Dashboard/Products/Create');
        } catch (\Exception $e) {
            return Inertia::render('Dashboard/Products/Create', []);
        }
    }
}
