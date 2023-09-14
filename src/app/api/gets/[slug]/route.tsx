//Dynamic API route
//Function takes in the request and context and extract the slug from the params from the context. This is then returned when the GET request is made.

import { getbyID } from "@/app/lib/sampleData";
import { NextRequest, NextResponse } from "next/server";

//Here the type interface is defined for the context parameter which only includes params
interface ContextType {
  params: {
    slug: string;
  };
}

//Get an item by ID
export async function GET(request: NextRequest, context: ContextType) {
  try {
    const id = request.url.split("gets/")[1];
    console.log("id is", id);
    //id must be converted to a number as it has the type of number in the sampleData file
    const item = getbyID(parseInt(id));

    if (!item) {
      return NextResponse.json(
        { message: "ERROR, item not found" },
        { status: 401 }
      );
    }
    return NextResponse.json({ message: "Ok", item }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

//Update an item by ID

//Delete an item by ID
