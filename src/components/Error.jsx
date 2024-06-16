import { useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
  const { data, status, statusText } = error;
  console.log(error);
  return (
    <div>
      <h2>opps somethings wrong</h2>
      <h1>
        {status} & {statusText}
      </h1>
      <p>{data}</p>
    </div>
  );
}
