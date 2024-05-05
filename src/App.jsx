import "./App.css";
import UserStatusProvider from "./store/UserStatusProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootNavigation from "./pages/RootNavigation";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import NewActivityPage from "./pages/NewActivityPage";
import VolunteersPage from "./pages/VolunteersPage";
import NewVolunteerPage from "./pages/NewVolunteerPage"
import OrganizationsPage from "./pages/OrganizationsPage";
import NewsPage from "./pages/NewsPage";
import ErrorPage from "./Components/errorPage/ErrorPage"

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigation />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorPage /> },
      { path: "activities", element: <ActivityPage />, errorElement: <ErrorPage /> },
      { path: "activities/new", element: <NewActivityPage />, errorElement: <ErrorPage /> },
      { path: "volunteers", element: <VolunteersPage />, errorElement: <ErrorPage /> }, 
      { path: "volunteers/new", element: <NewVolunteerPage />, errorElement: <ErrorPage /> },
      { path: "organizations", element: <OrganizationsPage />, errorElement: <ErrorPage /> },
      { path: "notifications", element: <NewsPage />, errorElement: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <UserStatusProvider>
        <RouterProvider router={BrowserRouter} />
      </UserStatusProvider>
    </div>
  );
}

export default App;
