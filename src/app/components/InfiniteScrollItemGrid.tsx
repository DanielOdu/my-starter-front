"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../(site)/home/card";
import { getData } from "../(site)/home/page";
// import { useRouter } from "next/navigation";

type Props = {
  search: string | undefined;
  initialItems: any[] | undefined;
  filter?: string;
  totalItems: number;
};

export default function InfiniteScrollItemGrid({
  search,
  initialItems,
  filter,
  totalItems,
}: Props) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  // const router = useRouter();

  //this useEffect works to sort (kind of) but try to get sort from search params in page.tsx and send to getProducts() in sampleData.tsx via the endpoint. The aim is to sort the data on the server before its returned to the client. if that doesnt workm revisit this client side sorting and get it to work.
  // useEffect(() => {
  //   const url = new URL(window.location.href);
  //   // const searchParams = new URLSearchParams(url.search);
  //   // const sort = searchParams.get("sort");
  //   // console.log("(InfiniteScrollItemGrid.tsx) sort:", sort);
  //   const searchParams = new URLSearchParams(url.search);
  //   console.log("ininfite", searchParams);

  //   switch (searchParams.get("sort")) {
  //     case "relevance":
  //       break;
  //     case "price-asc":
  //       setItems([...items].sort((a, b) => a.price - b.price));
  //       break;
  //     case "price-desc":
  //       setItems([...items].sort((a, b) => b.price - a.price));
  //       break;

  //     default:
  //       setItems(items);
  //   }
  // }, [router]);

  async function loadMoreItems() {
    const next = page + 1;
    const items = await getData({ query: search, page: next, filter });
    console.log("More items loaded", items);
    if (items.products?.length) {
      setPage(next);
      setItems((prev: Document[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...items.products,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView]);

  // useEffect(() => {
  //   console.log("ITEMS CHANGED");
  // }, [items]);

  return (
    <div className=" flex-col w-full">
      <div> {totalItems} found</div>
      <div
        className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  gap-2 py-2
       bg-blue-300 w-full "
      >
        {items?.map((item, idx) => (
          <Card
            prop1={item["title"]}
            prop2={item["id"]}
            prop3={item["thumbnail"]}
            prop4={item["price"]}
            key={`item-${idx}`}
          />
          //   <li key={item.id.toString()} className="relative">
          //     <div className="group aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          //       {item.thumbnail && (
          //         <Image
          //           src={item.thumbnail}
          //           alt=""
          //           className="w-full object-cover group-hover:opacity-75"
          //           width={300}
          //           height={300}
          //         />
          //       )}
          //     </div>
          //     <p className="mt-2 block truncate font-medium text-red-400">
          //       {item.title}
          //     </p>
          //     <p className="block text-sm font-medium text-gray-500">
          //       {item.cast?.join(", ")}
          //     </p>
          //     <p className="block text-sm font-medium text-gray-500">
          //       {item.year}
          //     </p>
          //   </li>
        ))}

        {/* loading spinner */}
        {/* something in the below classname is causing the far right column to get smaller as the page is made smaller */}
        <div
          ref={ref}
          className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 bg-red-300 mb-8"
        >
          <svg
            aria-hidden="true"
            className="h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
