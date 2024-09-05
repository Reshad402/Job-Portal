import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import { Home } from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
        // Here in .env.local file the URL is added as just change in need in env for final link
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        // here need to use params
        // loader: ({ params }) => {
        //   fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`);
        // },
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/job/${params.id}`
          );

          // Check if the response is OK
          if (!response.ok) {
            throw new Response("Failed to fetch job details", {
              status: response.status,
            });
          }

          // Parse the JSON response and return it
          const job = await response.json();
          return job;
        },
      },
    ],
  },
]);

export default router;
