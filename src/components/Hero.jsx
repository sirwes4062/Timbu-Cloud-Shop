import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {<Outlet />}
      <Footer />
    </div>
  );
};

const Hero = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Hero;
