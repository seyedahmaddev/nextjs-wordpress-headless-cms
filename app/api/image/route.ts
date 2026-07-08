// app/api/image/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    // دیکد کردن URL (چون encodeURIComponent شده)
    const decodedUrl = decodeURIComponent(url);
    
    // اعتبارسنجی URL - فقط از دامنه خودت اجازه بده
    const allowedDomains = ['seyedahmaddev.ir', 'wp.seyedahmaddev.ir'];
    const isValid = allowedDomains.some(domain => decodedUrl.includes(domain));
    
    if (!isValid) {
      return new NextResponse('Invalid image URL', { status: 403 });
    }

    // درخواست به سرور وردپرس
    const response = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Next.js Image Proxy)',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
      },
    });

    if (!response.ok) {
      return new NextResponse('Image not found', { status: 404 });
    }

    // دریافت تصویر
    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // برگرداندن تصویر
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Image proxy error:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}