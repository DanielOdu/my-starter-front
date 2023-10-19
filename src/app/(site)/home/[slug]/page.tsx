import getDomain from "@/app/lib/getDomain";
import Image from "next/image";
import { useState } from "react";

//Type here depends on what kind of value you expect to receive in the params parameter. If you are using Next.js dynamic routes, then the params parameter will be an object that contains the route parameters as key-value pairs. For example, if your page file is named [id].js and you visit /posts/1, then the params parameter will be { id: “1” }. In this case, you can use a type like { [key: string]: string } to indicate that the params parameter is an object with string keys and string values. Alternatively, you can use a more specific type that matches the exact shape of the params object, such as { id: string }. This will give you more type safety and code completion.
export default async function NewDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  // const [currentPhoto, setCurrentPhoto] = useState({item.thumbnail})

  const { slug } = params;
  // console.log("The slug is:", slug);
  const data = async () =>
    //This is the same as the getData function in the main page.tsx file but this one is inline so that the slug can be accessed to pass to the endpoint variable. This async function is used to retrieve the data from your API endpoint. These requests are ideally done on the server side so you wouldnt use 'use client' here, although in some cases that could still work.
    {
      //save the returned value from the imported function to the 'domain' variable
      const domain = await getDomain();
      //What is the endpoint that has access to the data?
      const endpoint = `${domain}/api/gets/${slug}`;
      // console.log("endpoint:", endpoint);

      //Ask to fetch the returned data from the endpoint and store it as a 'response' (res)  //HTTP GET
      //There are different fetch caching options:
      // force-cache (default) - fetches data once at build time and never again.
      // revalidate - fetches data in set intervals
      // no-store - fetches each time the component is rendered

      //un-comment the one you want to use. non default options should only be used in sever components. If you have a client component that triggers a fetch with a button etc this will be handled in a different way

      // const res = await fetch(endpoint);//no store default option
      // const res = await fetch(endpoint, { next: { revalidate: 10 } }); //revalidate after 10 seconds
      const res = await fetch(endpoint, { cache: "no-store" }); //revalidate on each render
      // .then((response) => response.json())
      // .then((json) => console.log(json));
      // console.log("response from endpoint", res);
      //Check that the response is OK, if not, throw an error
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      //Check that the content-type is application/json. If its not, return an empty array
      if (res.headers.get("content-type") != "application/json") {
        console.log("Not application/json still");
        return { items: [] };
      }

      //This return statement assumes the response is returned as json. If you're getting errors, its worth checking this in your endpoint.
      // console.log("Returning data");
      return res.json();
    };

  const ItemData = await data();
  //deconstruct the project item from the overall productData variable
  const { item } = ItemData;
  //must define images outside the returned render in order to access them using the map funtion. I.e you cannot do product.images.map()
  const images = item.images;

  // console.log("Item data:::", ItemData);

  return (
    <main className=" text-white">
      <h1 className="font-black text-6xl">DYNAMIC PRODUCT PAGE</h1>
      {/* <h2>Product id from params: {params.slug}</h2> */}
      {/* <h3 className=" bg-white text-gray-800">PRODUCT INFO</h3> */}
      <div className=" flex justify-center">
        <div className=" w-fit flex  border-2 border-red-500 space-x-3">
          <div className=" flex space-x-3">
            <div className=" flex-col space-y-3">
              {images.map((image: string) => (
                <Image
                  src={image}
                  alt="Product image"
                  width={100}
                  height={100}
                  priority
                />
              ))}
            </div>
            <Image
              src={item.thumbnail}
              alt="Product image"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className=" bg-orange-300 flex-wrap w-96">
            {/* <h3>Product id: {item.id}</h3> */}
            <h3>{item.brand}</h3>
            <h3 className=" text-3xl">{item.title}</h3>
            <h3 className=" flex-wrap">{item.description}</h3>
            <h3>£{item.price}</h3>
            {/* <h3>Product discountPercentage: {item.discountPercentage}</h3>
          <h3>Product rating: {item.rating}</h3> */}
            {/* <h3>Product stock: {item.stock}</h3> */}
            {/* <h3>Product category: {item.category}</h3> */}
          </div>
        </div>
      </div>
      {/* <h3>Product images:</h3> */}

      {/* <div className=" bg-gray-600">
        Update form goes here<p>update button</p>
      </div> */}
    </main>
  );
}
