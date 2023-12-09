"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  // to get query
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
    }

    // replace the link with including the query params
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="m-5 md:pr-5">
      <input
        type="text"
        name="search"
        placeholder="search..."
        className="border-4 border-black rounded-md p-1 md:p-2"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
