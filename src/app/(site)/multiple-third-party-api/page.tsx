//This page has two async functions that each fetch data from a 3rd part and store it as a response. This data is then gathered into an array of variables in the default function and can be rendered in the page.
//Each fetching function has type defined for it which is passed to it using Promise<Type>.
//A client-side component is also imported from another page folder into here and data can be passed to it through the 'prop' prop as long as it conforms to the 'prop' type which is string or number.

import Link from "next/link";
import Card from "../home/card";

type Time = {
  datetime: string;
};

async function getTime(): Promise<Time> {
  const endpoint = "http://worldtimeapi.org/api/timezone/America/Chicago";
  const res = await fetch(endpoint, { cache: "no-store" }); //revalidate on each render

  //Check that the response is OK, if not, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch time");
  }

  // Check that the content-type is application/json. If its not, return an empty array
  //This check seems to fail for the above request to the github api. Removing the test works
  // if (res.headers.get("content-type") != "application/json") {
  //   console.log("'content-type' is not 'application/json'");
  //   return { items: [] };
  // }

  return res.json();
}

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

async function getData(): Promise<Repository> {
  const endpoint = "https://api.github.com/repos/vercel/next.js";
  const res = await fetch(endpoint, { next: { revalidate: 5 } }); //revalidate on each render

  //Check that the response is OK, if not, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Check that the content-type is application/json. If its not, return an empty array
  //This check seems to fail for the above request to the github api. Removing the test works
  // if (res.headers.get("content-type") != "application/json") {
  //   console.log("'content-type' is not 'application/json'");
  //   return { items: [] };
  // }

  return res.json();
}

export default async function thirdPartyData() {
  const [data, time] = await Promise.all([getData(), getTime()]);
  // console.log("data", data);

  return (
    <>
      <h1 className=" bg-gray-500">Multiple 3rd party data</h1>
      <h2 className=" bg-gray-200 text-black">
        Time info, set to revalidate on each load
      </h2>
      <p>{time.datetime}</p>

      <h2 className=" bg-gray-200 text-black">
        Data info, set to revalidate every 5 seconds
      </h2>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.full_name}</p>
      <h2 className=" bg-gray-200 text-black">
        {/* This is a card imported from another page folder that takes a 'title' property as a prop as a string */}
      </h2>
      <Card prop1={data.full_name} prop2={data.id} />
      <Link href="./home">home</Link>
    </>
  );
}
