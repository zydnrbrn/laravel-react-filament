<?php

namespace Database\Seeders;

use Database\Factories\ProductCategoriesFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductCategoriesFactory::new()->count(10)->create();

        $this->command->info('Product categories seeded!');
    }
}
