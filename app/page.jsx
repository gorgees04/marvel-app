import Image from "next/image";
import Link from "next/link";
import logo from "./ui/img/avengers-logo.png";
import CardsLoadingSkeltons from "./ui/components/charactersLoadingSkeletons/CardsLoadingSkeltons";

export default function Home() {
  return (
    <main className="text-white">
      <CardsLoadingSkeltons />
    </main>
  );
}
