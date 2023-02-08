import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./components/Layout.tsx";
import React from "react";
import Bookevent from "./pages/Bookevent";
import ContactUs from "./pages/ContactUs"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/book",
    element: (
      <Layout>
        <Bookevent />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
