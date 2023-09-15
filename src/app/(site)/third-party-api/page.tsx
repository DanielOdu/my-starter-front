import Link from "next/link";

type Repository = {
  id: number;
  name: string;
  full_name: string;
};

async function getData() {
  const endpoint = "https://api.github.com/repos/vercel/next.js";
  const res = await fetch(endpoint, { cache: "no-store" }); //revalidate on each render

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
  const data: Repository = await getData();
  // console.log("data", data);

  return (
    <>
      <h1>3rd party data</h1>
      <p>{data.id}</p>
      <p>{data.name}</p>

      <Link href="./home">home</Link>
    </>
  );
}
