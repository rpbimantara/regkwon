<?php

namespace App\Http\Controllers\Backend;//ini tempat file controllernya (lokasinya)

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\User;

class BAuthController extends Controller
{
    public function index(Request $request)
    {
        return view('backend.login');
    }
    public function defaultuser(Request $request)
    {

    }
    public function doLogin(Request $request)
    {
        return view('backend.menus.dashboard.homeAdm');
    }
    public function profile()
    {
        return view('backend.menus.profile.index');
    }
    public function logout()
    {
        return view('login');
    }
}
