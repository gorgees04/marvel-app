import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <Link href={"/marvel"}>
        <h1 className="text-6xl font-bold">Marvel</h1>
      </Link>
    </main>
  );
}
