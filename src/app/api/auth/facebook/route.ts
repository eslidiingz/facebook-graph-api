// app/api/auth/facebook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { accessToken } = await req.json();

    const response = await fetch(
        `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email`
    );
    const data = await response.json();

    if (data.error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    } else {
        // Handle your user authentication logic here
        // e.g., create a session, store the user in your database, etc.
        return NextResponse.json(data, { status: 200 });
    }
}
