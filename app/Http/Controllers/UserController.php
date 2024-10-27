<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth as Autt;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        $user = Autt::user();
        return Inertia::render('Users/Users', ['users' => $users, 'user' => $user]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
        $user = Autt::user();
        return Inertia::render('Users/CreateForm', ['user' => $user]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        //
        // dd($request->all());
        User::create($request->all());
        return to_route('users.index')->with('success', 'User created successfully!');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $userDetails = User::find($id);
        $user = Autt::user();
        return Inertia::render('Users/EditForm', ['user' => $user, 'userDetails' => $userDetails]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        
        $user = User::find($id);
        $user->update($request->all());
        return to_route('users.index')->with('success', 'User updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $user = User::find($id);
        $user->delete();
        return to_route('users.index')->with('success', 'User deleted successfully!');
    }
}
