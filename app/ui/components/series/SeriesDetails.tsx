import { fetchCategoryById } from "@/app/lib/data";
import { Series } from "@/app/lib/definitions";
import CardDetails from "../CardDetails";
import { getImageUrl } from "@/app/lib/utils";

const SeriesDetails = async ({ id }: { id: string }) => {
  // fetch single series
  const seriesIdData = await fetchCategoryById("series", id);
  const seriesPage = seriesIdData.data.results;
  return (
    <div className="m-10">
      {seriesPage.map((aSeries: Series) => {
        return (
          <CardDetails
            name={aSeries.title}
            imgUrl={getImageUrl(aSeries.thumbnail)}
            description={aSeries.description}
            key={aSeries.id}
          />
        );
      })}
    </div>
  );
};

export default SeriesDetails;
