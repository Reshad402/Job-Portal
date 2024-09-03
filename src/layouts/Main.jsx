import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-330px)]">
        <Outlet />
      </div>

      {/* Footer */}
      <h1 className="text-center">Hi This is Footer</h1>
      <Footer />
    </div>
  );
};

export default Main;
