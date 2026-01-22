import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import RouteNotFound from './pages/RouteNotFound';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<RouteNotFound />} />
      </ Routes>
    </Suspense>
  )
}

export default App
