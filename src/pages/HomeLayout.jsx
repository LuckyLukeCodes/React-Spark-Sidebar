import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Blob } from "../components";
import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

const HomeLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <HomeContext.Provider value={{ showSidebar, toggleSidebar }}>
      <div className="flex bg-[var(--main-bg-color)]">
        <Navbar />
        <Outlet />
        {/* <Blob /> */}
      </div>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
