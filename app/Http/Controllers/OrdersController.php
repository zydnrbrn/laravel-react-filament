<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrdersController extends Controller
{
    public function paymentPage()
    {
        try {
            return Inertia::render('Orders/PaymentPage');
        } catch (\Exception $e) {
            return Inertia::render('Orders/PaymentPage', []);
        }
    }
}
