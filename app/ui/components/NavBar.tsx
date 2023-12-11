import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed top-0 z-10 w-screen h-[65px] sm:h-[100px] bg-marvelRed flex justify-center items-center shadow-2xl">
      <Link href={"/"}>
        <p className="text-4xl sm:text-5xl text-white font-bold">G-Marvel</p>
      </Link>
    </div>
  );
};

export default NavBar;
