import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const RootLayout = () => {
  return (
    <div className="root-wrapper">
      <Navbar />
      <main className="app-wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
