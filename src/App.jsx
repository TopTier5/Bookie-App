import { createBrowserRouter, RouterProvider, } from "react-router";
import { Toaster } from "sonner";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import DisplayPages from "./pages/DisplayPages";
import EditForm from "./pages/EditForm";
import SinglePage from "./pages/SinglePage";
import NotFound from "./pages/NotFound";

const BookAppRouter = createBrowserRouter([
   {path: '/', element: <Home /> },
  {path: '/addbook', element: <AddBook /> },
  {path: '/displaypages', element: <DisplayPages /> },
  {path: '/editform', element: <EditForm /> },
  {path: '/singlepage', element: <SinglePage /> },
  {path: '*', element: <NotFound /> },

]);



function App() {
  return (
    <>
      <RouterProvider router={BookAppRouter} />
       <Toaster richColors />
    </>
  );
}

export default App
