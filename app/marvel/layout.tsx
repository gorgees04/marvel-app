import Footer from "../ui/components/Footer";
import MarvelSideBar from "../ui/components/MarvelSideBar";
import NavBar from "../ui/components/NavBar";

export default function marvelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="marvel-bg ">
      <MarvelSideBar />
      <section className="mt-[170px] ml-0 sm:ml-[150px] sm:mt-[120px] md:ml-[250px]">
        {children}
      </section>
    </main>
  );
}
