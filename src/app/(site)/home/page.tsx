import Link from "next/link";
import Image from "next/image";
import PaginationItemGrid from "@/app/components/PaginationItemGrid";
import AddItemForm from "@/app/components/AddItemForm";
import getDomain from "@/app/lib/getDomain";
import HeroCarousel from "@/app/components/HeroCarousel";
import ServerSearch from "@/app/components/ServerSearch";
import InfiniteScrollItemGrid from "@/app/components/InfiniteScrollItemGrid";
import FilterBar from "@/app/components/FilterBar";
import SortMenu from "@/app/components/SortMenu";

//This async function is used to retrieve the data from your API endpoint. These requests are ideally done on the server side so you wouldnt use 'use client' here, although in some cases that could still work.
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
  filter?: string;
  sort?: string;
}) {
  //save the returned value from the imported function to the 'domain' variable
  const domain = getDomain();
  const searchQuery = query;
  // console.log("(home/page.tsx) searchQuery in getData function is:", searchQuery);
  //What is the endpoint that has access to the data?
  const endpoint = `${domain}/api/gets?searchQuery=${encodeURIComponent(
    searchQuery
  )}&page=${page}&limit=${limit}&filter=${filter}&sort=${sort}`;
  console.log("(home/page.tsx) getData() triggered. endpoint =", endpoint);
  // console.log("type of endpoint is:", typeof endpoint);

  //Ask to fetch the returned data from the endpoint and store it as a 'response' (res)  //HTTP GET
  //There are different fetch caching options:
  // force-cache (default) - fetches data once at build time and never again.
  // revalidate - fetches data in set intervals
  // no-store - fetches each time the component is rendered

  //un-comment the one you want to use. non default options should only be used in sever components. If you have a client component that triggers a fetch with a button etc this will be handled in a different way

  // const res = await fetch(endpoint); //no store default option
  // const res = await fetch(endpoint, { next: { revalidate: 10 } }); //revalidate after 10 seconds
  const res = await fetch(endpoint, { cache: "no-store" }); //revalidate on each render
  // .then((response) => response.json())
  // .then((json) => console.log(json));

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

  const data = await res.json();
  // console.log("data from response", data);
  const products = data.products.products; // Access the products array
  // console.log("data.products", products);
  const totalItems = data.products.totalItems; // Access the totalItems count
  const categories = data.categories;
  return { products, totalItems, categories };
}

//Your default function that renders the content will also be async and will 'await' the getData function above in order to have access to the data in the component.
export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 12;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const filter =
    typeof searchParams.filter === "string" ? searchParams.filter : undefined;
  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : undefined;
  console.log(
    "(home/page.tsx) searchparams in default HomePage function is:",
    searchParams
  );

  const { products, totalItems, categories } = await getData({
    page,
    limit,
    query: search,
    filter,
    sort,
  });
  // console.log(
  //   "(home/page.tsx) data returned from getData() in default HomePage function - lenth = ",
  //   data.products.length,
  //   data
  // );

  console.log("products length", products.length);
  console.log("total items", totalItems);
  console.log("categories", categories);
  // const items = data && data.products ? [...data.products] : [];
  const items = products;
  // const items = Array.isArray(data.products) ? [...data.products] : [];
  // console.log("items", items);

  // const categories = data && data.categories ? [...data.categories] : [];
  // console.log("(home/page.tsx) categories are:", categories);
  // console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  return (
    <main>
      <h1 className=" font-black text-6xl ">THIS IS YOUR HOME PAGE</h1>
      <h3 className=" font-black uppercase">
        "Gets" dummy data from the endpoint api/gets
      </h3>
      <HeroCarousel />
      {/* This is a way to access the data in the component. It checks if data is true and if so, displays the json as a string */}
      {/* {data && JSON.stringify(data)} */}

      {/* Items can also be mapped over like this */}

      {/*<li key={`post-${idx}`}>
              <p>{item.title}</p>
               <p>{item.description}</p>
             </li> */}

      {/* Items can also be passed to a child component as a prop. Within the child component the items can be saved to another component specific variable and be mapped over. */}
      <ServerSearch search={search} />

      <FilterBar
        items={items}
        categories={categories}
        search={search}
        page={page}
        // filter={filter}
        // onCategoryBtnClick={handleCategoryBtnClick}
        // selectedCategories={selectedCategories}
      />
      <SortMenu sortOption={sort} />

      {/* pagination grid ------------ */}
      {/* <div className=" flex h-auto overflow-auto  ">
        <PaginationItemGrid
          items={items}
          categories={categories}
          search={search}
          page={page}
          filter={filter}
        />
      </div> */}

      {/* Infinite scroll grid ---------- */}
      <div key={Math.random()} className=" flex h-auto overflow-auto  ">
        <InfiniteScrollItemGrid
          search={search}
          initialItems={items}
          filter={filter}
          totalItems={totalItems}
        />
      </div>

      {/* <div className=" bg-gray-600"> <AddItemForm /></div> */}

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
