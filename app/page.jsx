import Image from "next/image";
import Link from "next/link";
import logo from "./ui/img/avengers-logo.png";

export default function Home() {
  return (
    <main className="text-white">
      <Link href={"/marvel"}>
        <h1 className="text-6xl font-bold">Marvel</h1>
      </Link>
      <div className="w-[300px] ml-40">
        <Image src={logo} alt="loading logo" width={300} height={0} />
        <h1 className="text-[50px] border-t-8 rounded border-black text-center">
          Loading....
        </h1>
      </div>
    </main>
  );
}
