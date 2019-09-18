<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Models\BouquetOfTheDay;
use App\Validators\BouquetOfTheDayValidator;
use Illuminate\Container\Container as Application;

/**
 * Class BouquetOfTheDayRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class BouquetOfTheDayRepositoryEloquent extends BaseRepository implements BouquetOfTheDayRepository
{
    private $bouquetRepository;

    public function __construct(BouquetRepositoryEloquent $bouquetRepository, Application $app)
    {
        $this->bouquetRepository = $bouquetRepository;
        parent::__construct($app);
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return BouquetOfTheDay::class;
    }

    public function getDiscountPrice($bouquet)
    {
        $discount = $this->findWhere(['bouquet_id' => $bouquet->id])->first()->discount;
        $oldPrice = $bouquet->sizes()->orderBy('count')->first()->pivot->price;
        $newPrice = $oldPrice - ( $discount / 100 ) * $oldPrice;
        return $newPrice;
    }

    public function getForHome()
    {
        try{
            $bouquetOfTheDay = $this->first()->bouquet;
            $discountPrice = $this->getDiscountPrice($bouquetOfTheDay);
            $data = [
                'bouquet' => $bouquetOfTheDay,
                'discount_price' => round($discountPrice),
            ];
            return $data;
        }
        catch(\Exception $e){
            return;
        }
    }

    public function newBouquetofTheDay($req)
    {
        $bouquetOfTheDay = $this->findWhere(['bouquet_id' => $req->bouquet_id])->first();
        
            $this->model()::truncate();
            $this->create([
                'bouquet_id' => $req->bouquet_id,
                'discount' => $req->discount
            ]);
        $bouquet = $this->bouquetRepository->findWhere(['bouquet_of_the_day' => 1])->first();

        if($bouquet!==null)
        {
            $bouquet->bouquet_of_the_day = 0;
            $bouquet->save();
            $newBouquet = $this->bouquetRepository->find($req->bouquet_id);
            $newBouquet->bouquet_of_the_day = 1;
            $newBouquet->save();
            
        }
        else{
            $newBouquet = $this->bouquetRepository->find($req->bouquet_id);
            dd($newBouquet);
            $newBouquet->bouquet_of_the_day = 1;
            $newBouquet->save();
        }
        
    }    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
