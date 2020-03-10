<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DataController extends Controller
{
	public function home()
	{
		return Inertia::render('Home', [
			'message' => 'You are home'
		]);
	}

	public function about()
	{
		return Inertia::render('About', [
			'message' => 'This is a message from the controller'
		]);
	}
}
