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

// Route::prefix('/')->group(function () {
//     Route::get('login', 'Backend\BAuthController@index')->name("login");
//     Route::post('login', 'Backend\BAuthController@doLogin');
// });

Route::get('/', 'Backend\BAuthController@index')->name("login");
Route::get('home', 'Backend\BAuthController@doLogin');

Route::get('profile', 'Backend\BAuthController@profile');