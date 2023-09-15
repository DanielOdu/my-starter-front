//Type here depends on what kind of value you expect to receive in the params parameter. If you are using Next.js dynamic routes, then the params parameter will be an object that contains the route parameters as key-value pairs. For example, if your page file is named [id].js and you visit /posts/1, then the params parameter will be { id: “1” }. In this case, you can use a type like { [key: string]: string } to indicate that the params parameter is an object with string keys and string values. Alternatively, you can use a more specific type that matches the exact shape of the params object, such as { id: string }. This will give you more type safety and code completion.
export default function NewDynamicSubPage(params: { subslug: string }) {
  console.log(params);
  return (
    <main>
      <h1>This is a new dynamic sub-page</h1>
    </main>
  );
}
