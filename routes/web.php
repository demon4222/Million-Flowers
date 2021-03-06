<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// DB::listen(function($query) {
//     var_dump($query->sql, $query->bindings,$query->time);
// });
// DB::listen(function($query) {
//     var_dump($query->time);
// });

Route::get('/', 'HomeController@index');

Route::get('/about', 'HomeController@about');
Route::get('/delivery', 'HomeController@delivery');
Route::get('/pay', 'HomeController@pay');
Route::get('/recommendation', 'HomeController@recommendation');
Route::get('/garanties', 'HomeController@garanties');
Route::get('/contacts', 'HomeController@contacts');
Route::get('/shops', 'HomeController@shops');

Route::post('/storeOrder', 'OrderController@storeOrder')->name('orders.store');

Route::get('/cart', 'CartController@index')->name('cart.index');
Route::post('/cart/bouquet', 'CartController@storeBouquet')->name('cart.storeBouquet');
Route::post('cart/flower', 'CartController@storeFlower')->name('cart.storeFlower');
Route::get('/empty', 'CartController@empty')->name('cart.empty');
Route::post('/cart/addProduct', 'CartController@addProductAjax');
Route::post('/cart/subProduct', 'CartController@subProductAjax');
Route::delete('/cart/{id}', 'CartController@destroy')->name('cart.destroy');

Route::get('/bouquets','BouquetController@index');
Route::get('/bouquets/{slug}/{size_id}','BouquetController@show')->name('bouquet.show');

Route::get('/bouquet-types/{slug}','BouquetController@getBouquetsByType')->name('bouquets.byType');

Route::get('/bouquet-sub-types/{slug}','BouquetController@getBouquetsBySubType')->name('bouquets.bySubType');

Route::get('/flowers','FlowerController@index')->name('flowers.index');
Route::get('/flowers/{slug}/{height_id}','FlowerController@show')->name('flower.show');

Route::get('/flower-type/{slug}','FlowerController@getFlowersByCategory')->name('flowers.byCategory');

Route::get('/search', 'SearchController@search')->name('search');

// Route::get('/bouquets/{price_filter}','FilterController@bouquetsPrices')->name('filter.price.bouquets');

/*ADMIN*/

Route::group(['middleware' => ['auth'], 'prefix' => 'admin'], function () {
    Route::get('/', function () {
        return view('admin');
    });

    Route::resource('/articles', 'ArticleController', [

    ]);

    Route::post('/save-image', 'UploadImageController@saveImage');

    Route::get('/head-slider','HeadSliderController@index');
    Route::get('/head-slider/edit/{slide_id}','HeadSliderController@show');
    Route::get('/head-slider/add','HeadSliderController@add');
    Route::post('/head-slider/add','HeadSliderController@addRequest');
    Route::post('/head-slider/{slide_id}/change-button','HeadSliderController@changeButton');
    Route::post('/head-slider/{slide_id}/change-button-link','HeadSliderController@changeButtonLink');
    Route::post('/head-slider/{slide_id}/change-text','HeadSliderController@changeText');
    Route::post('/head-slider/{slide_id}/change-photo','HeadSliderController@changePhoto');
    Route::post('/head-slider/{slide_id}/delete','HeadSliderController@delete');
    Route::get('/bouquets/','BouquetController@indexAdmin')->name('admin.all-bouquets');
    Route::get('/all-products', function(){
        return view('layouts.admin.admin-all-products');
    });
    Route::get('/add-bouquet','BouquetController@add');
    Route::post('/add-bouquet/ajax-subtypes','BouquetsSubTypeController@getSubTypes');
    Route::post('/add-bouquet','BouquetController@addRequest');
    Route::get('/edit-bouquet/{bouquet_id}', 'BouquetController@edit');
    Route::post('/edit-bouquet/{bouquet_id}', 'BouquetController@editRequest');
    Route::get('/edit-bouquet/delete-size/{size_id}/{bouquet_id}', 'BouquetSizeController@deleteSize');
    Route::get('/all-bouquets/delete/{bouquet_id}', 'BouquetController@delete');
    Route::get('/bouquet/inStock/{id}','BouquetController@setInStock')->name('admin.bouquet.inStock');
    Route::get('/bouquet/outOfStock/{id}','BouquetController@setOutOfStock')->name('admin.bouquet.outOfStock');

    Route::get('/flowers/','FlowerController@indexAdmin');
    Route::get('/flowers/add-flower', 'FlowerController@add');
    Route::post('/flowers/add-flower', 'FlowerController@addRequest');
    Route::get('/flowers/edit/{flower_id}', 'FlowerController@getForEdit');
    Route::post('/flowers/edit', 'FlowerController@editRequest');
    Route::get('/flowers/edit/{flower_id}/delete-height/{height_id}','FlowerHeightController@deleteHeight');
    Route::get('/flower/inStock/{id}','FlowerController@setInStock')->name('admin.flower.inStock');
    Route::get('/flower/outOfStock/{id}','FlowerController@setOutOfStock')->name('admin.flower.outOfStock');
    Route::get('/flowers/delete/{id}', 'FlowerController@delete')->name('admin.flower.delete');

    Route::get('/hits-slider', 'HitsSliderController@indexAdmin');
    Route::get('/add-to-hits/{bouquet_id}', 'HitsSliderController@addBouquet');
    Route::get('/hits-slider/delete-slide/{slide_id}', 'HitsSliderController@deleteSlide');

    Route::post('/add-bouquet-of-the-day', 'BouquetOfTheDayController@addBouquetOfTheDay');

    Route::get('/orders','OrderController@index')->name('orders.index');
    Route::get('/orders/finish/{id}','OrderController@done')->name('order.done');
});




//Route::get('', function () {
//    return view('admin');
//});
//Route::get('/head-slider','HeadSliderController@index');
//Route::get('/admin/head-slider/edit/{slide_id}','HeadSliderController@show');
//Route::get('/admin/head-slider/add','HeadSliderController@add');
//Route::post('/admin/head-slider/add','HeadSliderController@addRequest');
//Route::post('/admin/head-slider/{slide_id}/change-button','HeadSliderController@changeButton');
//Route::post('/admin/head-slider/{slide_id}/change-button-link','HeadSliderController@changeButtonLink');
//Route::post('/admin/head-slider/{slide_id}/change-text','HeadSliderController@changeText');
//Route::post('/admin/head-slider/{slide_id}/change-photo','HeadSliderController@changePhoto');
//Route::post('/admin/head-slider/{slide_id}/delete','HeadSliderController@delete');
//Route::get('/admin/bouquets/','BouquetController@indexAdmin')->name('admin.all-bouquets');
//Route::get('/admin/all-products', function(){
//    return view('layouts.admin.admin-all-products');
//});
//Route::get('/admin/add-bouquet','BouquetController@add');
//Route::post('/admin/add-bouquet/ajax-subtypes','BouquetsSubTypeController@getSubTypes');
//Route::post('/admin/add-bouquet','BouquetController@addRequest');
//Route::get('/admin/edit-bouquet/{bouquet_id}', 'BouquetController@edit');
//Route::post('/admin/edit-bouquet/{bouquet_id}', 'BouquetController@editRequest');
//Route::get('/admin/edit-bouquet/delete-size/{size_id}/{bouquet_id}', 'BouquetSizeController@deleteSize');
//Route::get('/admin/all-bouquets/delete/{bouquet_id}', 'BouquetController@delete');
//Route::get('/admin/bouquet/inStock/{id}','BouquetController@setInStock')->name('admin.bouquet.inStock');
//Route::get('/admin/bouquet/outOfStock/{id}','BouquetController@setOutOfStock')->name('admin.bouquet.outOfStock');
//
//Route::get('/admin/flowers/','FlowerController@indexAdmin');
//Route::get('/admin/flowers/add-flower', 'FlowerController@add');
//Route::post('/admin/flowers/add-flower', 'FlowerController@addRequest');
//Route::get('/admin/flowers/edit/{flower_id}', 'FlowerController@getForEdit');
//Route::post('/admin/flowers/edit', 'FlowerController@editRequest');
//Route::get('/admin/flowers/edit/{flower_id}/delete-height/{height_id}','FlowerHeightController@deleteHeight');
//Route::get('/admin/flower/inStock/{id}','FlowerController@setInStock')->name('admin.flower.inStock');
//Route::get('/admin/flower/outOfStock/{id}','FlowerController@setOutOfStock')->name('admin.flower.outOfStock');
//
//Route::get('/admin/hits-slider', 'HitsSliderController@indexAdmin');
//Route::get('/admin/add-to-hits/{bouquet_id}', 'HitsSliderController@addBouquet');
//Route::get('/admin/hits-slider/delete-slide/{slide_id}', 'HitsSliderController@deleteSlide');
//
//Route::post('/admin/add-bouquet-of-the-day', 'BouquetOfTheDayController@addBouquetOfTheDay');
//
//Route::get('/admin/orders','OrderController@index')->name('orders.index');
//Route::get('/admin/orders/finish/{id}','OrderController@done')->name('order.done');
/*ENDADMIN*/

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
