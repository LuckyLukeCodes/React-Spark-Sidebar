import { useHomeContext } from "../pages/HomeLayout";
import contacts from "../utils/contacts";
import ContactItem from "./ContactItem";

const ContactSection = () => {
  const { showSidebar } = useHomeContext();
  return (
    <>
      {showSidebar && (
        <div className="mb-2 mt-9 flex items-center gap-6 pl-5">
          <h5 className="text-xs uppercase text-slate-100 opacity-65">
            contacts
          </h5>
          <div className="rounded-full bg-blue-400 px-3 py-1 text-xs">3</div>
        </div>
      )}

      <div className="flex flex-col">
        {contacts.map((contact) => (
          <ContactItem key={contact.name} {...contact} />
        ))}
        {!showSidebar && (
          <div className="mb-5 ml-4 mt-4 flex h-[55px] w-[55px] items-center justify-center rounded-full border-2 border-dashed border-[var(--text-color)] text-xl opacity-45">
            +
          </div>
        )}
      </div>
    </>
  );
};

export default ContactSection;
