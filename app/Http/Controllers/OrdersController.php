<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class OrdersController extends Controller
{
    public function paymentPage()
    {
        try {
            return Inertia::render('Orders/PaymentPage');
        } catch (\Exception) {
            return Inertia::render('Orders/PaymentPage', []);
        }
    }
}
