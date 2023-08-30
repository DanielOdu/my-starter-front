//This is a client-side form component that can be imported into a page component

"use client";

import { useState } from "react";

export default function LinksCreateForm() {
  //This is an optional part of the function where the results returned from the API after the post request can be stored as state and used in the UI or however else.
  const [results, setResults] = useState(null);

  //This part of the function handles the data submitted by the form in the UI. it stores the data in formData then converts that data into an object and logs it. Then the data is converted into a string of JSON that can be sent to an API endpoint for a POST request.
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Here an error occurs because the event.target property is of type EventTarget, which is not compatible with the HTMLFormElement type expected by the FormData constructor. To solve the error, you need to cast the event.target to HTMLFormElement using the as keyword. This tells TypeScript that you are sure that the event.target is an HTMLFormElement and it can access its properties without errors.
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    const JSONData = JSON.stringify(data);
    console.log("JSONData", JSONData);

    //This part of the function will handle the post request to the 'posts' endpoint that contains the post 'function'
    const endpoint = "api/posts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log("result", result);
    setResults(result);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          className=" text-black"
          type="text"
          name="name"
          placeholder="name"
        ></input>
        <input
          className=" text-black"
          type="text"
          name="description"
          placeholder="description"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* Rendering the 'results' state in the UI */}
      {results && JSON.stringify(results)}
    </>
  );
}
