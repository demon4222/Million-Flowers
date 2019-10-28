<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    const IMAGE_DIR = 'images';
    const FILE_DIR = 'files';

    protected $fillable = [
        'uri',
    ];

    public static function getImageUrlById($id)
    {
        return self::whereid($id)->value('uri');
    }

    public function gallery()
    {
        return $this->belongsToMany(Article::class, 'article_images', 'article_id', 'image_id')->withPivot('description');
    }
}
