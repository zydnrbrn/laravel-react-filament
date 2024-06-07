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

    public function merchant()
    {
        return $this->belongsTo(Merchants::class);
    }

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }

    public function users()
    {
        return $this->hasManyThrough(User::class, Orders::class);
    }
}
