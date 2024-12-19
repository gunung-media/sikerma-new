<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuperAdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->guard('web')->user()->role !== 'super-admin') {
            return redirect(route('dashboard'))->with('error', 'Anda bukan super admin');
        }

        return $next($request);
    }
}
