//This is the global error file. Any specific directories that dont have their own error file will use this one.

"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error is:", error);
  }, []);

  const retryRequestHandler = () => {
    reset();
  };
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={retryRequestHandler}>Retry request</button>
    </div>
  );
}
