import { Link, useLocation } from "react-router-dom";
import { useHomeContext } from "../pages/HomeLayout";

const NavbarItem = ({ text, icon, path }) => {
  const { showSidebar } = useHomeContext();
  const location = useLocation();
  const isActiveItem =
    location.pathname === "/" + path && location.pathname !== "/logout";
  const isDefault = path === "/" && location.pathname === "/";
  let linkClass = "flex cursor-pointer items-center gap-3";

  if (showSidebar && (isActiveItem || isDefault)) {
    linkClass += " border-l-2 border-[var(--hover-color)] text-[#5175f0]";
  } else {
    linkClass += " border-l-2 border-transparent ";
  }

  if (!showSidebar && (isActiveItem || isDefault)) {
    linkClass += " rounded-lg bg-[var(--hover-color)] p-2 text-[#F5f5f5]";
  }

  if (showSidebar) {
    linkClass +=
      " pl-5 text-sm hover:border-l-2 hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]";
  } else {
    linkClass += " rounded-lg p-2 text-xl hover:bg-[var(--hover-color)]";
  }

  return (
    <div className={`${showSidebar ? "mb-9" : "mb-5"} flex gap-6`}>
      <Link to={path} className={linkClass}>
        {icon}
        {showSidebar && text}
      </Link>
      {text === "Messages" && showSidebar && (
        <div className="rounded-full bg-blue-400 px-3 py-1 text-xs">8</div>
      )}
    </div>
  );
};

export default NavbarItem;
