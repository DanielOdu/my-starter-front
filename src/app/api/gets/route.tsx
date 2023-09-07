//Standard API GET route

import { getProducts } from "@/app/lib/sampleData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getProducts(); //await was added to this line as the getProducts function was made async in the sampleData.tsx to test the loading state using a timeout
    return NextResponse.json({ message: "OK", products }, { status: 200 });
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
