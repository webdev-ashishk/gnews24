import { useEffect, useState } from "react";
import NewsCardMenu from "./NewsCardMenu";

export default function Body() {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetchNews();
  }, []);
  async function fetchNews() {
    const response = await fetch(
      "https://newsapi.org/v2/everything/?q=jobs&apiKey=2f7fbc902de14f53a875f1f00621b9f7"
    );
    const json = await response.json();
    setAllNews(json.articles);
    console.log(allNews);
  }
  return (
    <div className="">
      <NewsCardMenu allNews={allNews} />
    </div>
  );
}
