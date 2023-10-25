"use server";

// import getDomain from "../lib/getDomain";
import { getProducts, getUniqueCategories } from "../lib/sampleData";

// //This async function is used to retrieve the data from your API endpoint. These requests are ideally done on the server side so you wouldnt use 'use client' here, although in some cases that could still work.
//Keep this code incase you need to revert to using api/gets/route.tsx in future instead of a server action. types will need to be analysed and adjusted. getDomain will need to be imported here.
// export async function getData({
//   page = 1,
//   limit = 12,
//   query,
//   filter,
//   sort,
// }: {
//   page: number;
//   limit?: number;
//   query?: string | undefined | null;
//   filter?: string;
//   sort?: string;
// }) {
//   // simulate delay
//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   //save the returned value from the imported function to the 'domain' variable
//   const domain = getDomain();
//   const searchQuery = query;
//   console.log(
//     "(serverActions.tsx) searchQuery in getData function is:",
//     searchQuery
//   );
//   //What is the endpoint that has access to the data?
//   const endpoint = `${domain}/api/gets?searchQuery=${encodeURIComponent(
//     searchQuery as string
//   )}&page=${page}&limit=${limit}&filter=${filter}&sort=${sort}`;
//   console.log("(serverActions.tsx) getData() triggered. endpoint =", endpoint);

//   //Ask to fetch the returned data from the endpoint and store it as a 'response' (res)  //HTTP GET
//   //There are different fetch caching options:
//   // force-cache (default) - fetches data once at build time and never again.
//   // revalidate - fetches data in set intervals
//   // no-store - fetches each time the component is rendered

//   //un-comment the one you want to use. non default options should only be used in sever components. If you have a client component that triggers a fetch with a button etc this will be handled in a different way

//   // const res = await fetch(endpoint); //no store default option
//   // const res = await fetch(endpoint, { next: { revalidate: 10 } }); //revalidate after 10 seconds
//   const res = await fetch(endpoint, { cache: "no-store" }); //revalidate on each render

//   //Check that the response is OK, if not, throw an error
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   //Check that the content-type is application/json. If its not, return an empty array
//   if (res.headers.get("content-type") != "application/json") {
//     console.log("(serverActions.tsx) Not application/json still");
//     return { items: [] };
//   }

//   //This return statement assumes the response is returned as json. If you're getting errors, its worth checking this in your endpoint.
//   // console.log("Returning data");

//   const data = await res.json();
//   const products = data.products; // Access the products array
//   const totalItems = data.totalItems; // Access the totalItems count
//   const categories = data.categories;
//   return { products, totalItems, categories };
// }

//-------------------------------------------------------------------------

// This async function is used to retrieve the data directly from your database data handler function getProducts
export async function getData({
  page = 1,
  limit = 12,
  query,
  filter,
  sort,
}: {
  page: number;
  limit?: number;
  query?: string | undefined | null;
  filter?: string | undefined;
  sort?: string;
}) {
  console.log("(serverAction.tsx)(getData) page:", page);
  console.log("(serverAction.tsx)(getData) limit:", limit);
  console.log("(serverAction.tsx)(getData) query(search):", query);
  console.log("(serverAction.tsx)(getData) filter:", filter);
  console.log("(serverAction.tsx)(getData) sort:", sort);

  const data = await getProducts({
    page,
    limit,
    searchQuery: query,
    filter,
    sort,
  });

  const categories = getUniqueCategories();

  const products = data.products; // Access the products array
  const totalItems = data.totalItems; // Access the totalItems count

  return { products, totalItems, categories };
}
