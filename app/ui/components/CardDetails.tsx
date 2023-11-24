import Image from "next/image";

const CardDetails = ({
  name,
  imgUrl,
  description,
}: {
  name: string;
  imgUrl: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Image
        src={imgUrl}
        alt={name}
        width={150}
        height={200}
        className="lg:w-[200px] lg:h-[300px] m-5 border-4 border-white rounded"
      />
      <div className="m-5 h-[200px] lg:my-10">
        <h1 className="text-2xl font-bold text-marvelRed mb-4">{name}</h1>
        {description.length > 0 ? (
          <p className="w-[350px] lg:w-[700px]">{description}</p>
        ) : (
          <p className="w-[350px] lg:w-[700px]">No Description</p>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
