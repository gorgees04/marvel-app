"use client"; // Error components must be Client Components
import groot from "@/app/ui/img/groot.png";
import Image from "next/image";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-white flex flex-col justify-center items-center w-full min-h-screen">
      <Image src={groot} alt="falcon image" width={300} height={0} />
      <h2>Sorry, something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="text-marvelRed"
      >
        Try again
      </button>
    </div>
  );
}
