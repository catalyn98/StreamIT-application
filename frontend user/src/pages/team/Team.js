import React from "react";
import BannerPages from "../../components/banners/BannerPages";
import MembersTeam from "../../components/team/MembersTeam";
import TextPromo from "../../components/textPromo/TextPromo";

export default function Team() {
  return (
    <div>
      <BannerPages pageName="Echipa" />
      <main id="main" className="site-main">
        <MembersTeam />
        <TextPromo />
      </main>
    </div>
  );
}
