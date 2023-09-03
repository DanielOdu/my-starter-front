import Link from "next/link";
import Image from "next/image";
import getDomain from "../lib/getDomain";
import Card from "./card";

//This async function is used to retrieve the data from your API endpoint. These requests are ideally done on the server side so you wouldnt use 'use client' here, although in some cases that could still work.
async function getData() {
  //save the returned value from the imported function to the 'domain' variable
  const domain = getDomain();
  //What is the endpoint that has access to the data?
  const endpoint = `${domain}/api/gets`;

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
}

//Your default function that renders the content will also be async and will 'await' the getData function above in order to have access to the data in the component.
export default async function NewPage() {
  const data = await getData();
  const items = data && data.products ? [...data.products] : [];
  // console.log("data", data);
  // console.log("items", items);
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
  return (
    <main>
      <h1>This is a new page</h1>
      <p>"Gets" data from the endpoint api/gets</p>
      {/* This is a way to access the data in the component. It checks if data is true and if so, displays the json as a string */}
      {/* {data && JSON.stringify(data)} */}

      {/* Items can also be mapped over like this */}

      {/*<li key={`post-${idx}`}>
              <p>{item.title}</p>
               <p>{item.description}</p>
             </li> */}

      {/* or you could incorporate the imported component and pass the mapped data to it like this */}
      {items &&
        items.map((item, idx) => {
          return (
            <Card prop1={item.title} prop2={item.id} key={`post-${idx}`} />
          );
        })}
      <p>
        <Link href="./third-party-api">third-party-api</Link>
      </p>
      <p>
        <Link href="./multiple-third-party-api">multiple-third-party-api</Link>
      </p>
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
