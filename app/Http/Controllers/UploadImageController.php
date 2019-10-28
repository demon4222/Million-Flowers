<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Repositories\UploadFileRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UploadImageController extends Controller
{
    public function saveImage(Request $request)
    {
        $file = $request->file('image');

        $file = UploadFileRepository::save($file, true);
        return $file;
    }

    public function deleteImage(File $file)
    {
        UploadFileRepository::delete($file);
    }
}
