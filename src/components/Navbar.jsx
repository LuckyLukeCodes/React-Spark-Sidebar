import links from "../utils/links";
import settings from "../utils/settings";
import NavbarItem from "./NavbarItem";
import lightning from "../assets/images/lightning.png";
import ContactSection from "./ContactSection";
import { useHomeContext } from "../pages/HomeLayout";
import Separator from "./Separator";
import SidebarToggleButton from "./SidebarToggleButton";

const Navbar = () => {
  const { showSidebar } = useHomeContext();

  return (
    <div
      className={`h-screen ${showSidebar ? "w-96" : "w-24"} rounded-br-lg rounded-tr-lg bg-[var(--bg-color)] text-[var(--text-color)]`}
    >
      <div className="mb-8 flex items-center py-5 pl-3">
        <img src={lightning} alt="" />
        {showSidebar && (
          <h2 className="electrolize-regular pl-2 text-3xl font-bold">SPARK</h2>
        )}
      </div>
      <SidebarToggleButton />
      <ul
        className={`flex flex-col ${showSidebar ? "items-start gap-2" : "items-center"}`}
      >
        {links.map((link) => (
          <NavbarItem key={link.text} {...link} />
        ))}
      </ul>
      <Separator />
      <ContactSection />
      {!showSidebar && <Separator />}
      <div
        className={` flex flex-col gap-2 ${showSidebar ? "mt-16 items-start" : "mt-8 items-center"}`}
      >
        {settings.map((setting) => (
          <NavbarItem key={setting.text} {...setting} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
