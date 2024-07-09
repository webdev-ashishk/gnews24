import { Link } from "react-router-dom";
export default function NewsCard({ allNews }) {
  return (
    <div className="flex flex-wrap justify-center items-center border-2">
      {allNews.map((news) => (
        <div className="w-[300px] h-[350px] m-5 bg-blue-950 text-white rounded-lg shadow-lg overflow-clip border-2">
          <img
            src={news?.urlToImage}
            alt={news?.source?.id}
            className="rounded-t-lg h-40 w-full"
          />
          <div className="ml-3">
            <h1 className="text-2xl font-semibold">{news?.source?.name}</h1>
            <h2 key={news?.source?.id} className="">
              {news?.title.slice(0, 70)}...
            </h2>
            <h3 className="font-sm">
              Date:{" "}
              {news.publishedAt.slice(0, 10).split("-").reverse().join("-")}
            </h3>
            {/* <h3>Date:{
              const date=news.publishedAt.slice(0,10);
              
              }</h3> */}
            <Link to={news?.url} target="_blank">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 p-2 bt-2"
              >
                READE MORE ...
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
