import { useHomeContext } from "../pages/HomeLayout";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";

const SidebarToggleButton = () => {
  const { showSidebar, toggleSidebar } = useHomeContext();
  return (
    <div
      className={`absolute ${showSidebar ? "left-[17.2rem]" : "left-[3.4rem]"} top-[5.3rem] flex h-9 w-9 translate-x-2/4 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--main-bg-color)] bg-[var(--hover-color)] p-1 content-none`}
    >
      <button
        className="flex items-center justify-center p-1"
        onClick={() => {
          toggleSidebar();
        }}
      >
        {showSidebar ? (
          <IoChevronBackSharp className="font-extrabold" />
        ) : (
          <IoChevronForwardSharp className="font-bold" />
        )}
      </button>
    </div>
  );
};

export default SidebarToggleButton;
