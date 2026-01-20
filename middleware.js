// paradox-studio/middleware.js
import { NextResponse, NextRequest } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host');

  // Subdomain nikalna (e.g., 'official' from 'official.paradox-studio.vercel.app')
  // Isse thoda safe banate hain taaki localhost ya IP par crash na ho
  const parts = hostname.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  // Agar koi subdomain nahi hai ya main site hai
  if (!subdomain || subdomain === 'paradox-studio' || subdomain === 'www' || subdomain === 'localhost') {
    return NextResponse.next();
  }

  // VIP logic: Rewriting
  // Hum current URL ka path use karenge taaki query params bhi saath jayein
  url.pathname = `/vip/${subdomain}${url.pathname}`;
  
  return NextResponse.rewrite(url);
}

// Ye config add karna zaroori hai taaki middleware faltu files par na chale
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)',
  ],
};
