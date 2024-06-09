<?php

namespace App\Repositories\Eloquent;

use App\Models\Orders;
use App\Repositories\OrdersRepositoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class OrdersRepository.
 */
class OrdersRepository extends BaseRepository implements OrdersRepositoryInterface
{
    /**
     * UserRepository constructor.
     *
     * @param Orders $model
     */
    public function __construct(Orders $model)
    {
        parent::__construct($model);
    }
}
