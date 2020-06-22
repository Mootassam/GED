<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

public function store(Request $request){

    $user = new user();
    $user->name =$request->input('name');
    $user->email =$request->input('email');
    $user->password =$request->input('password');
    $user->remember_token =shal(time());
    $user->save();
}






}
