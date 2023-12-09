"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const HomeSearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // make to create a params
    const params = new URLSearchParams(searchParams);

    // useinf get to assign a param for the link
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("category");
    }

    // replace the link with including the query params
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="text-white my-10">
      <input
        type="text"
        name="search"
        placeholder="Search for Marvel...."
        className="w-[400px] rounded border-4 border-marvelRed p-2 bg-slate-200 text-marvelRed font-bold"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default HomeSearchBar;
