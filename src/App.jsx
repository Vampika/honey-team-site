import MainPage from "./pages/MainPage.jsx"
import MemebersPage from "./pages/MembersPage.jsx"
import MemberPage from "./pages/MemberPage.jsx";
import Error from "./pages/Error.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/members",
        element: <MemebersPage />,
      },
      {
        path: "/members/:id",
        element: <MemberPage />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  },

]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
