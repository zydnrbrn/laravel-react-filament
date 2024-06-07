<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Merchants extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'store_name',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function products()
    {
        return $this->hasMany(Products::class);
    }

    public function orders()
    {
        return $this->hasManyThrough(Orders::class, Products::class);
    }
}
