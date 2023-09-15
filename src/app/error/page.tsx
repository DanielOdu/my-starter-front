//THIS PAGE IS A COPY OF home AND SERVES AS A WAY OF TESTING ERROR HANDLING. THE ERROR IS IN THE ENDPOINT VALUE

//This async function is used to retrieve the data from your API endpoint. These requests are ideally done on the server side so you wouldnt use 'use client' here, although in some cases that could still work.
async function getData() {
  //What is the endpoint that has access to the data?
  const endpoint = "http://localhosssst:3000/api/posts";
  //Ask to fetch the returned data from the endpoint and store it as a 'response' (res)
  const res = await fetch(endpoint); //HTTP GET

  //Check that the response is OK, if not, throw an error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  //This return statement assumes the response is returned as json. If you're getting errors, its worth checking this in your endpoint.
  return res.json();
}

//Your default function that renders the content will also be async and will 'await' the getData function above in order to have access to the data in the component.
export default async function NewPage() {
  const data = await getData();
  const items = data && data.items ? [...data.items] : [];
  //   console.log("data", data);
  //   console.log("items", items);
  return (
    <main>
      <h1>This is a new page</h1>
      <p>"Posts" data from the endpoint api/posts</p>
      {/* This is a way to access the data in the component. It checks if data is true and if so, displays the json as a string */}
      {/* {data && JSON.stringify(data)} */}

      {/* Items can also be mapped over like this */}
      {items &&
        items.map((item, idx) => {
          return (
            <li key={`post-${idx}`}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </li>
          );
        })}
    </main>
  );
}
