<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'merchant_id',
        'name',
        'price',
        'stock',
    ];

    public function productCategories()
    {
        return $this->belongsTo(ProductCategories::class, 'category_id', 'id');
    }
}
