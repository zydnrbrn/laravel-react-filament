<?php

namespace App\Repositories\Eloquent;

use App\Models\Products;
use App\Repositories\ProductsReporitoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class ProductsReporitory.
 */
class ProductsReporitory extends BaseRepository implements ProductsReporitoryInterface
{
    /**
     * UserRepository constructor.
     *
     * @param Products $model
     */
    public function __construct(Products $model)
    {
        parent::__construct($model);
    }
}
