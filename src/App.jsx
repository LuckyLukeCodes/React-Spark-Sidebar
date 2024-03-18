import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Analytics,
  HomeLayout,
  Dashboard,
  Messages,
  Collections,
  Users,
  Account,
  Settings,
  Logout,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
