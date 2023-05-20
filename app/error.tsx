"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from "next/navigation";
function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        try again
      </button>
    </div>
  );
}

export default Error;
