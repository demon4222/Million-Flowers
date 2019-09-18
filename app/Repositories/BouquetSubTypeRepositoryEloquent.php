<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Models\BouquetSubType;
use App\Validators\BouquetSubTypeValidator;

/**
 * Class BouquetSubTypeRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class BouquetSubTypeRepositoryEloquent extends BaseRepository implements BouquetSubTypeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BouquetSubType::class;
    }

    public function getBySlug($slug)
    {
        return $this->model()::whereSlug($slug)->firstOrFail();
    }

    public function findParentType($id)
    {
        return $this->find($id)->bouquetTypes()->first();
    }

    public function getBouquets($sub_type_id)
    {
        $subType = $this->find($sub_type_id);
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
