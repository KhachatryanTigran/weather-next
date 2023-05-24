"use client";
import { MdNotificationImportant } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { redirect } from "next/navigation";
function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="w-full h-full p-5 flex flex-col justify-center items-center bg-slate-300">
      <div className="flex flex-col text-slate-900 gap-3  ">
        <h1 className=" text-lg ">No matching location found.</h1>{" "}
        <div className="flex items-center gap-3 ">
          <MdNotificationImportant className="text-red-600 w-14 h-14" />
          <h1 className="text-red-700">Enter existing location</h1>
        </div>
      </div>
      <button
        className="bg-cyan-500 hover:bg-cyan-800 m-5 rounded-lg   p-3 text-slate-50"
        onClick={() => {
          reset();
        }}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
