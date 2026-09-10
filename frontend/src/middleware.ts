import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const refreshToken = request.cookies.get('refreshToken')?.value;

    const isDashboardRoute = pathname.startsWith('/dashboard');

    const isAuthRoute = pathname === '/login' || pathname === '/signup';

    // if user try to open dashboard without cookie 
    if (isDashboardRoute && !refreshToken) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    // if user already logged in and try to open auth routes 
    if (refreshToken && isAuthRoute) {
        const dashboardUrl = new URL('/dashboard', request.url);
        return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/signup']
}