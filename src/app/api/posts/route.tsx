//Standard API route to post data

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  //used for FORM DATA or API JSON POST DATA
  //watch tutorial for way to use HTML form instead of react
  const contentType = await request.headers.get("content-type");
  if (contentType != "application/json") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const data = await request.json();
  //See tutorial for a way to validate the request data against some criteria.
  return NextResponse.json(data, { status: 201 });
}
