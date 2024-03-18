import { IoChatbubbleOutline } from "react-icons/io5";
import { useHomeContext } from "../pages/HomeLayout";

const ContactItem = ({ name, abbrev, location, picture }) => {
  const { showSidebar } = useHomeContext();
  return (
    <div className="mt-4 grid grid-cols-3 gap-3 pl-4">
      {picture === "" ? (
        <div>
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-orange-200 text-xl font-bold text-[var(--main-bg-color)]">
            {abbrev}
          </div>
          <div className="relative bottom-[52px] left-[42px] h-[0.8rem] w-[0.8rem] rounded-full border-2 border-[var(--main-bg-color)] bg-green-400 content-none"></div>
        </div>
      ) : (
        <div>
          <div className="h-[55px] w-[55px] rounded-full">
            <img
              src={picture}
              alt="profile picture"
              className="h-[55px] w-[55px] rounded-full"
            />
          </div>
          <div className="relative bottom-[52px] left-[42px] h-[0.8rem] w-[0.8rem] rounded-full border-2 border-[var(--main-bg-color)] bg-red-500 content-none"></div>
        </div>
      )}

      {showSidebar && (
        <>
          <div className="flex flex-col justify-center">
            <h4 className="pb-1 text-[13px]">{name}</h4>
            <label className="text-[10px] text-slate-100 opacity-65">
              {location}
            </label>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center">
            <IoChatbubbleOutline className="text-[24px] font-bold text-[var(--hover-color)]" />
          </div>
        </>
      )}
    </div>
  );
};

export default ContactItem;
