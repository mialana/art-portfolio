import React from "react";
import { Helmet } from "react-helmet";
import { Artwork } from "../../components";
import { headerData } from "../../data/headerData";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Artwork />
    </div>
  );
}

export default HomePage;
