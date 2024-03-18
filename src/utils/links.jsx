import {
  IoHomeOutline,
  IoBookmarksOutline,
  IoBarChartOutline,
  IoChatbubbleOutline,
  IoPeopleOutline,
} from "react-icons/io5";

const links = [
  { text: "Dashboard", path: "/", icon: <IoHomeOutline /> },
  { text: "Analytics", path: "analytics", icon: <IoBarChartOutline /> },
  { text: "Messages", path: "messages", icon: <IoChatbubbleOutline /> },
  { text: "Collections", path: "collections", icon: <IoBookmarksOutline /> },
  { text: "Users", path: "users", icon: <IoPeopleOutline /> },
];

export default links;
