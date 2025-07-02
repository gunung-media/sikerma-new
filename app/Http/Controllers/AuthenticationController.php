<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
    public function showLoginForm(): Response
    {
        return Inertia::render('Authentication/Login/index');
    }

    public function loginPost(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (auth()->guard('web')->attempt($request->only('username', 'password'), $request->boolean('remember'))) {
            $request->session()->regenerate();
            return Inertia::location(route('dashboard'));
        }

        return back()->withErrors(['error' => 'Akun tidak ditemukan']);
    }

    public function logout(Request $request): RedirectResponse
    {
        auth()->guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect(route('auth.login'));
    }

    public function changePassword(Request $request)
    {

        $request->validate([
            'current_password' => 'required|string|min:6',
            'new_password' => 'required|string|min:6',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'error' => 'Current password is incorrect.'
            ], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response(status: 200);
    }
}
