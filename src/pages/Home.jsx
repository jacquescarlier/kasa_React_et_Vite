import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Cards from "../components/card/Cards";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniere.png";

const Home = () => {

  return (
    <div>
      <div className="container-general">
        <Header />
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={picture}
            alt="photo de montagne"
            title1="Chez vous,"
            title2="partout et ailleurs"
          />
        </section>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
