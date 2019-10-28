<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Storage;
use App\Models\File;

class UploadFileRepository
{
    /**
     * @param $file
     * @param $fileType
     *
     * @return File
     *
     * @throws \Throwable
     */
    public static function save($file, $fileType)
    {
        $originalName = $file->getClientOriginalName();

        $name = pathinfo($originalName, PATHINFO_FILENAME);
        $extension = pathinfo($originalName, PATHINFO_EXTENSION);
        $fullName = $name . uniqid() . '.' . $extension;

        $dir = $fileType ? File::IMAGE_DIR : File::FILE_DIR;

        Storage::putFileAs('public/' . $dir, $file, $fullName);

        $file = new File();
        $file->uri = '/storage/' . $dir . '/' . $fullName;
        $file->is_image = $fileType;
        $file->saveOrFail();

        return $file;
    }

    public static function delete(File $file)
    {
        Storage::delete($file->uri);
        $file->delete();
    }
}
