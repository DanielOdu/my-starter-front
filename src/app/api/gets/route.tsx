//Standard API GET route

import { getProducts, getUniqueCategories } from "@/app/lib/sampleData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    let searchQuery = request.nextUrl.searchParams.get("searchQuery");
    if (searchQuery === "undefined") {
      searchQuery = null;
    }
    console.log(
      "(app/api/gets) searchQuery passed from client into endpoint is:",
      searchQuery
    );
    const page = parseInt(request.nextUrl.searchParams.get("page") as string); // Use a type assertion here
    console.log(
      "(app/api/gets) page passed from client into endpoint is:",
      page
    );
    const limit = parseInt(request.nextUrl.searchParams.get("limit") as string); // Use a type assertion here
    console.log(
      "(app/api/gets) limit passed from client into endpoint is:",
      limit
    );

    let filter = request.nextUrl.searchParams.getAll("filter") as string[];
    if (filter.includes("undefined")) {
      filter = null as any; // Use a type assertion here
    } else {
      filter = Array.from(filter);
    }

    console.log(
      "(app/api/gets) filter passed from client into endpoint is:",
      filter
    );
    const sort = request.nextUrl.searchParams.get("sort");
    console.log(
      "(app/api/gets) sort passed from client into endpoint is:",
      sort
    );

    const productData = await getProducts({
      searchQuery,
      page,
      limit,
      filter,
      sort,
    }); //await was added to this line as the getProducts function was made async in the sampleData.tsx to test the loading state using a timeout
    // console.log("(app/api/gets) products variable data returned from getProducts() in sampleData lib is:", products);
    const categories = getUniqueCategories();
    // console.log(
    //   "(app/api/gets) categories data returned from uniqueCategories() in sampleData lib is:",
    //   categories
    // );

    return NextResponse.json(
      { message: "OK", productData, categories },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }

  //Below is an example of having some sample data added to the response inline. Instead we have sample data being returned from the getProducts function from our sampleData file.
  // return NextResponse.json({
  //   items: [
  //     {
  //       id: 1,
  //       title: "Hello World",
  //       description: "This is an object in an array of data called 'items'.",
  //     },
  //     {
  //       id: 2,
  //       title: "Hello Globe",
  //       description:
  //         "This is the 2nd object in an array of data called 'items'.",
  //     },
  //     {
  //       id: 3,
  //       title: "Hello Universe",
  //       description:
  //         "This is the 3rd object in an array of data called 'items'.",
  //     },
  //   ],
  // });
  // return NextResponse.json();
}
