import { useParams } from "react-router-dom";
export default function NewsDetails() {
  const { newsid } = useParams();
  return (
    <div className="text-white text-2xl">
      <h2>news details .. rendered!</h2>
      <p>id : {newsid}</p>
    </div>
  );
}
