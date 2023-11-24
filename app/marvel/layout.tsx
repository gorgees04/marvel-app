import MarvelSideBar from "../ui/components/MarvelSideBar";
import NavBar from "../ui/components/NavBar";

export default function marvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="marvel-bg">
      <NavBar />
      <MarvelSideBar />
      {children}
    </main>
  );
}
