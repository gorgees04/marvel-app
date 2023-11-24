import React from "react";

const Btn = ({
  btnName,
  handleClick,
}: {
  btnName: string;
  handleClick: any;
}) => {
  return (
    <div>
      <button
        className="py-2 px-4 border-2 border-white rounded-lg shadow-lg transition duration-200 hover:bg-marvelRed"
        onClick={handleClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Btn;
