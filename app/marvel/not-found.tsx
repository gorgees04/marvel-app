import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
