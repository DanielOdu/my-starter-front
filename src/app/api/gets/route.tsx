//Standard API GET route

import { getProducts, getUniqueCategories } from "@/app/lib/sampleData";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const searchQuery = request.nextUrl.searchParams.get("searchQuery");
    console.log(
      "(app/api/gets) searchQuery passed from client into endpint is:",
      searchQuery
    );
    const page = parseInt(request.nextUrl.searchParams.get("page"));
    console.log(
      "(app/api/gets) page passed from client into endpint is:",
      page
    );
    const limit = parseInt(request.nextUrl.searchParams.get("limit"));
    console.log(
      "(app/api/gets) limit passed from client into endpint is:",
      limit
    );

    const products = await getProducts({ searchQuery, page, limit }); //await was added to this line as the getProducts function was made async in the sampleData.tsx to test the loading state using a timeout
    // console.log("(app/api/gets) products variable data returned from getProducts() in sampleData lib is:", products);
    const categories = getUniqueCategories();
    // console.log(
    //   "(app/api/gets) categories data returned from uniqueCategories() in sampleData lib is:",
    //   categories
    // );
    // console.log(products, categories);
    return NextResponse.json(
      { message: "OK", products, categories },
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
