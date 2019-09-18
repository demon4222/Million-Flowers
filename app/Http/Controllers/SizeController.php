<?php

namespace App\Http\Controllers;

use App\Repositories\SizeRepositoryEloquent as Size;

class SizeController extends Controller
{
    private $sizeRepository;

    public function __construct(Size $sizeRepository) {

        $this->sizeRepository = $sizeRepository;
    }
}
