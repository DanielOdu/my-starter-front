//This is a 'nested' error file. This will be returned for errors within the 'error' page directory.

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
      <h2>Something went wrong on purpose</h2>
      <button onClick={retryRequestHandler}>Retry request</button>
    </div>
  );
}
