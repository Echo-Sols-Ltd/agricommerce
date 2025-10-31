import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // Get the request body
    const body = await request.json();

    // Validate required fields
    if (!body.email || !body.password) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: 'Email and password are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Make the request to the actual API server
    const apiUrl = 'https://umuhinzi-api.echo-solution.com/api/v1/auth/login';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: 'http://localhost:3000',
      },
      body: JSON.stringify(body),
    });

    // Get the response data
    const data = await response.json();

    // Create response headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Forward any cookies from the API
    const cookies = response.headers.getSetCookie();
    if (cookies && cookies.length > 0) {
      headers.set('Set-Cookie', cookies.join(', '));
    }

    // Return the response with proper CORS headers
    return new NextResponse(JSON.stringify(data), {
      status: response.status,
      headers,
    });
  } catch (error: unknown) {
    console.error('Login API error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Internal server error',
        error: errorMessage,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

// Handle preflight OPTIONS request
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
