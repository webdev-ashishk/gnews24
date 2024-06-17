import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchBody from "../Utils/useFetchBody";
export default function SingleNews() {
  // const [news,setNews]=useState(null)
  const [filteredNews, setFilteredNews] = useState([]);
  const allNews = useFetchBody();
  const { newsid } = useParams();

  const uniqueMenuItems = [];
  allNews.forEach((item) => {
    if (!uniqueMenuItems.find((x) => x.publishedAt === x.publishedAt)) {
      uniqueMenuItems.push(item);
    }
  });
  setFilteredNews(uniqueMenuItems);
  console.log(filteredNews);
  return (
    <div className="text-white text-2xl">
      <h2>news details .. rendered!</h2>
      <p>id : {newsid}</p>
      {/* <p>{filteredNews.name}</p>
      <p>{filteredNews.title}</p>
      <p>{filteredNews.description}</p> */}
    </div>
  );
}
