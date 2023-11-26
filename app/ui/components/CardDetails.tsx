import Image from "next/image";

const CardDetails = ({
  name,
  imgUrl,
  description,
  date,
}: {
  name: string;
  imgUrl: string;
  description?: string;
  date?: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row mb-[70px] md:mb-[100px]">
      <Image
        src={imgUrl}
        alt={name}
        width={150}
        height={200}
        className="lg:w-[200px] lg:h-[300px] m-5 border-4 border-white rounded"
      />
      <div className="m-5 h-[200px] lg:my-10">
        <h1 className="text-2xl font-bold text-marvelRed mb-4">{name}</h1>
        {description !== "" && description !== " " && description !== null ? (
          <p className="w-[200px] sm:w-[500px] md:w-[650px]">{description}</p>
        ) : (
          <p className="">No Description</p>
        )}
        <div>
          {date && (
            <div>
              <p className="mt-10 text-lg font-bold text-marvelRed">
                Published:{" "}
                <span className=" text-gray-400 font-normal">{date}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
