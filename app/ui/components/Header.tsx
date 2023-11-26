import SearchBar from "./SearchBar";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col md:flex-row md:justify-between md:px-10">
      <h1 className="text-4xl md:text-[40px] font-extrabold text-marvelRed m-4">
        {title}
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
