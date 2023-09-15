//To fetch data within a client-side component you can use 'swr'.
//use 'pnpm add swr' first, then use the code template below

// "use client";

// import useSwr from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function GithubProfile() {
//   const urlWithTheData = "url";
//   const { data, error, isLoading } = useSWR(urlWithTheData, fetcher);
//   if (error) return "An error happened";
//   if (isLoading) return "Loading...";
//   return (
//     <div>
//       <h1>{data.name}</h1>
//     </div>
//   );
// }
