import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

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

// const {productId} = useparams()

const Hero = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />

        {/* adding an internal route to product page that sends the id to the query strings */}
        <Route path="/productpage" element={<ProductPage />}>
          <Route path=":productId" element={<productPage />} />
          {/* <Route path={`/productpage/${props.id}`} element={<productPage />} /> */}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Hero;
