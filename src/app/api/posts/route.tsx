//Standard API route to post data

import { NextRequest, NextResponse } from "next/server";
import { addItem } from "@/app/lib/sampleData";

export async function POST(request: NextRequest) {
  //used for FORM DATA or API JSON POST DATA
  //watch tutorial for way to use HTML form instead of react
  const contentType = await request.headers.get("content-type");
  if (contentType != "application/json") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = await request.json();

  try {
    const item = {
      id: Date.now().toString(),
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
    };
    addItem(item);
    //See tutorial for a way to validate the request data against some criteria.
    return NextResponse.json({ message: "OK", item }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

// type Item = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// };
