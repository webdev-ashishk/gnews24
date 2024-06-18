import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
export default function Body() {
  const [allNews, setAllNews] = useState([]);
  const [searchText, setSearchText] = useState("apple");
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchNews(searchText);
  }, [searchText]);
  async function fetchNews(searchText) {
    const response = await fetch(
      `https://newsapi.org/v2/everything/?q=${searchText}s&apiKey=${apiKey}`
    );
    const json = await response.json();
    setAllNews(json.articles);
    console.log(allNews);
  }

  console.log(searchText);
  {
    if (allNews.length === 0) {
      return (
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
      );
    } else if (allNews.length === undefined) {
      return (
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
      );
    }
  }
  return (
    <div className="text-red-400">
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
