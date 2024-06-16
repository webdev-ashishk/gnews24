import { Link, useParams } from "react-router-dom";

export default function NewsCardMenu({ allNews }) {
  const newsid = useParams();
  return (
    <div className="flex flex-wrap justify-center items-center">
      {allNews.map((news) => (
        <Link to={`/newsdetails/${newsid}`}>
          <div className="w-[300px] h-[300px] m-5 bg-gray-200 rounded-lg shadow-lg overflow-clip">
            <img
              src={news?.urlToImage}
              alt={news?.source?.id}
              className="rounded-t-lg"
            />
            <h1 className="ml-3 text-2xl">{news?.source?.name}</h1>
            <h2 key={news?.source?.id} className="ml-3">
              {news?.title}
            </h2>
            <h3 className="ml-3 font-sm">Date: {news.publishedAt}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
