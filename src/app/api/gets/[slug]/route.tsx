//Dynamic API route
//Function takes in the request and context and extract the slug from the params from the context. This is then returned when the GET request is made.

import { NextRequest, NextResponse } from "next/server";

//Here the type interface is defined for the context parameter which only includes params
interface ContextType {
  params: {
    slug: string;
  };
}

export async function GET(request: NextRequest, context: ContextType) {
  const { params } = context;
  const { slug } = params;
  console.log("request", request, "context", context);
  return NextResponse.json({ slug: slug });
}
