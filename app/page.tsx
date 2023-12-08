import Image from "next/image";
import Link from "next/link";
import logo from "./ui/img/avengers-logo.png";
import CardsLoadingSkeltons from "./ui/components/loading-skeleton/CardsLoadingSkeletons";
import DetailsSkeletonLoading from "./ui/components/loading-skeleton/DetailsSkeletonLoading";

export default function Home() {
  return (
    <main className="text-white">
      <Link href={"/marvel"}>Marvel</Link>
      <DetailsSkeletonLoading />
    </main>
  );
}
