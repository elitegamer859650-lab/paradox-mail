// paradox-studio/middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host');

  // Subdomain nikalna (e.g., 'official' from 'official.paradox-studio.vercel.app')
  const subdomain = hostname.split('.')[0];

  // Agar koi seedha main site par hai
  if (subdomain === 'paradox-studio' || subdomain === 'www') {
    return NextResponse.next();
  }

  // VIP logic: Agar subdomain 'official' hai toh usay /vip/official par bhej do
  // Background mein user ko pata nahi chale ga ke URL change hua hai (Rewriting)
  return NextResponse.rewrite(new URL(`/vip/${subdomain}`, req.url));
}
