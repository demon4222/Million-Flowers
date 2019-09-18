<?php

namespace App\Http\Controllers;

use App\Repositories\BouquetRepositoryEloquent as Bouquet;
use App\Repositories\FlowerRepositoryEloquent as Flower;
use App\Http\Requests\SearchRequest;

class SearchController extends Controller
{
    private $bouquetRepository;

    private $flowerRepository;

    public function __construct(Bouquet $bouquetRepository, Flower $flowerRepository)
    {
        $this->bouquetRepository = $bouquetRepository;
        $this->flowerRepository = $flowerRepository;
    }

    public function search(SearchRequest $request)
    {
        $query = $request->input('q');

        $bouquets = \App\Models\Bouquet::where('name','like',"%$query%")->paginate(15);
        $prices = $this->bouquetRepository->getPrices($bouquets);

        return view('layouts.search-result')->with([
            'bouquets' => $bouquets,
            'prices' => $prices
        ]);
    }
}
