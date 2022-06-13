import React from "react";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import MembersTeam from "../../components/team/MembersTeam";
import TextPromo from "../../components/textPromo/TextPromo";
import Footer from "../../components/footer/Footer";

export default function Team() {
  return (
    <>
      <Header />
      <BannerPages pageName="Echipa" />
      <main id="main" className="site-main">
        <MembersTeam />
        <TextPromo />
      </main>
      <Footer />
    </>
  );
}
