import React from "react";
import { useHomeContext } from "../pages/HomeLayout";

const Separator = () => {
  const { showSidebar } = useHomeContext();
  return (
    <div
      className={`mx-5 mb-4 ${!showSidebar && "mt-4"} border-b-2 border-[#272939] content-none`}
    ></div>
  );
};

export default Separator;
