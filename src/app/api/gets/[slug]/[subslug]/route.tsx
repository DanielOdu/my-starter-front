import { NextRequest, NextResponse } from "next/server";

//Here the type interface is defined for the context parameter which only includes params
interface ContextType {
  params: {
    slug: string;
    subslug: string;
  };
}

export async function GET(request: NextRequest, context: ContextType) {
  const { params } = context;
  const { slug } = params;
  const { subslug } = params;
  // console.log(request, "request", context, "context", params, "params");
  return NextResponse.json({ slug: slug, subslug: subslug });
}
