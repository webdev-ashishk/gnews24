import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import ShimmerUI from "./ShimmerUI";
export default function Body() {
  const [allNews, setAllNews] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchNews(searchText);
  }, [searchText]);
  async function fetchNews(searchText) {
    const response = await fetch(
      `https://newsapi.org/v2/everything/?q=${searchText}s&apiKey=2f7fbc902de14f53a875f1f00621b9f7`
    );
    const json = await response.json();
    setAllNews(json.articles);
    console.log(allNews);
  }

  console.log(searchText);
  if (allNews.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="">
      <div className="search-input text-center">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="text-white w-[400px] h-[100px] m-2 pl-5 text-2xl border-2 rounded-sm mr-16"
        />
      </div>

      <NewsCard allNews={allNews} />
    </div>
  );
}
