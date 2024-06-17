import { Link } from "react-router-dom";
export default function NewsCard({ allNews }) {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {allNews.map((news) => (
        <div className="w-[300px] h-[350px] m-5 bg-blue-950 text-white rounded-lg shadow-lg overflow-clip border-2">
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
          <Link to={news?.url} target="_blank">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2 bt-2"
            >
              READE MORE ...
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
