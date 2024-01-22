import { Outlet } from "react-router-dom";
import Navbar from "./components/MovieInformation/components/Navbar/Navbar";
import Footer from "./components/MovieInformation/components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
