import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
