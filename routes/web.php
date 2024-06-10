<?php

use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/products', [ProductsController::class, 'index'])->name('products.index');
Route::get('/products/{id}', [ProductsController::class, 'detail'])->name('products.detail');
Route::group([
    'prefix'    => 'pay'
], function () {
    Route::get('/', [OrdersController::class, 'paymentPage'])->name('products.pay');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group([
    'prefix' => 'dashboard',
    'middleware' => ['auth', 'dashboard'],
], function () {
    Route::group([
        'prefix' => 'products',
    ], function () {
        Route::get('/', [ProductsController::class, 'list'])->name('products.list');
        Route::get('/create', [ProductsController::class, 'dashboardCreatePage'])->name('products.create');
        Route::post('/create', [ProductsController::class, 'create'])->name('products.store');
        Route::get('/{id}/edit', [ProductsController::class, 'edit'])->name('products.edit');
        Route::patch('/{id}/edit', [ProductsController::class, 'update'])->name('products.update');
        Route::delete('/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');
    });

    Route::group([
        'prefix'    => 'orders'
    ], function () {
        Route::get('/', function () {
            return Inertia::render('Dashboard/Orders/Index');
        })->name('orders');
    });

    Route::group([
        'prefix'    => 'customers'
    ], function () {
        Route::get('/', function () {
            return Inertia::render('Dashboard/Customers/Index');
        })->name('customers');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
