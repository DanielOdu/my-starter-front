import Image from "next/image";
import PaginationItemGrid from "@/app/components/PaginationItemGrid";
import AddItemForm from "@/app/components/AddItemForm";
import getDomain from "@/app/lib/getDomain";
import HeroCarousel from "@/app/components/HeroCarousel";
import ServerSearch from "@/app/components/ServerSearch";
import InfiniteScrollItemGrid from "@/app/components/InfiniteScrollItemGrid";
import FilterBar from "@/app/components/FilterBar";
import SortMenu from "@/app/components/SortMenu";
import ResetBtn from "@/app/components/ResetBtn";
import { ContextProvider } from "@/app/context/context";
import BackToTopBtn from "@/app/components/BackToTopBtn";
import { Roboto } from "next/font/google";
import { useNavBarHeight } from "@/app/context/dimensionContext";
import Options from "@/app/components/OptionsBar";
import { getData } from "@/app/actions/serverActions";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
});

//Your default function that renders the content will also be async and will 'await' the getData function above in order to have access to the data in the component.
export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(
    "(home/page.tsx) HomePage() ---------------------- Start of data flow ------------------------"
  );
  // console.log("(home/page.tsx) params:", searchParams);
  console.log(
    "(home/page.tsx) searchparams in default HomePage function is:",
    searchParams
  );
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 12;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const filter =
    typeof searchParams.filter === "string" ? searchParams.filter : undefined;

  const filterParams = new URLSearchParams("filter=" + filter);

  let initialFilters = undefined;
  //if filter is not undefined assign the array of values to initialFilters.
  if (filter != undefined) {
    initialFilters = Array.from(filterParams.values());
  }

  // console.log("filterparams !has undefined");
  const sort =
    typeof searchParams.sort === "string" ? searchParams.sort : undefined;

  //Logs
  console.log("(home/page.tsx) page:", page);
  console.log("(home/page.tsx) limit:", limit);
  console.log("(home/page.tsx) search:", search);
  console.log("(home/page.tsx) filter:", filter);
  console.log("(home/page.tsx) initialFilters params:", filterParams);
  console.log("(home/page.tsx) initialFilters:", initialFilters);
  console.log("(home/page.tsx) sort:", sort);

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

  console.log(
    "(home/page.tsx) HomePage() total products returned to home",
    totalItems
  );
  console.log(
    "(home/page.tsx) HomePage() products returned to home length",
    products.length
  );

  const items = products;

  // console.log("items", items);
  // console.log("(home/page.tsx) categories are:", categories);
  // console.log(process.env.NEXT_PUBLIC_VERCEL_URL);

  console.log(
    "(home/page.tsx) HomePage() ---------------------- end of data flow ------------------------"
  );

  return (
    <ContextProvider initialValue={search} initialFilters={initialFilters}>
      <main className=" relative " key={Math.random()}>
        <h1 className=" font-black text-6xl text-white ">
          THIS IS YOUR HOME PAGE
        </h1>
        <h1 className={` ${roboto.className} font-black text-6xl text-white`}>
          THIS IS YOUR HOME PAGE
        </h1>
        <h3 className=" font-black uppercase text-white ">
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
        <Options
          search={search}
          sort={sort}
          items={items}
          categories={categories}
          page={page}
        />

        {/* Items can also be passed to a child component as a prop. Within the child component the items can be saved to another component specific variable and be mapped over. */}
        {/* <div className={`bg-pink-400 top-[${useNavBarHeight}px] sticky z-20  `}>
          <div className=" flex">
            <ServerSearch search={search} />
            <SortMenu sortOption={sort} />
            <ResetBtn />
          </div>

          <FilterBar
            items={items}
            categories={categories}
            search={search}
            page={page}
          />
        </div> */}

        <BackToTopBtn />

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

        {/* <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        /> */}
      </main>
    </ContextProvider>
  );
}
