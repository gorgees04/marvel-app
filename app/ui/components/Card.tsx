import { getImageUrl } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
// typescript definitions
import { Img } from "@/app/lib/definitions";

const Card = ({ name, img, id }: { name: string; img: Img; id: string }) => {
  return (
    <Link href={`/marvel/characters/${id}`} className="flex">
      <div className="bg-offWhite flex flex-col rounded overflow-hidden m-3 p-1  shadow-lg w-[150px] md:w-[200px] transition duration-500 hover:bg-marvelRed hover:text-white">
        <Image
          src={getImageUrl(img)}
          alt={name}
          width={150}
          height={0}
          className="md:w-[200px] rounded border-b-8 border-b-marvelRed"
          priority={true}
        />
        <p className="font-bold p-1 w-full h-full flex justify-center items-center">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Card;
