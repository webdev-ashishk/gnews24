import useFetchBody from "../Utils/useFetchBody";
import NewsCard from "./NewsCard";
import ShimmerUI from "./ShimmerUI";
export default function Body() {
  const allNews = useFetchBody();

  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);
  if (allNews.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="">
      <NewsCard allNews={allNews} />
    </div>
  );
}
