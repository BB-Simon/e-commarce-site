import React from "react";
import Header from "./partials/Header";
import NewCollection from "./NewCollection";
import Products from "./Products";
import Contact from "./Contact";
import Footer from "./partials/Footer";
import PopulerProduct from "./PopulerProduct";

const Home = () => {
  return (
    <>
      <Header />
      <NewCollection />
      <Products />
      <PopulerProduct />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
