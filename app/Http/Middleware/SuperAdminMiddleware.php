<?php

namespace App\Http\Middleware;

use App\Enums\RoleEnum;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuperAdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->guard('web')->user()->role !== RoleEnum::SUPER_ADMIN) {

            return redirect(route('dashboard'))->with('error', 'Anda bukan super admin');
        }

        return $next($request);
    }
}
