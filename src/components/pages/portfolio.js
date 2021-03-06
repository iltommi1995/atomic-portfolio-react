import React from "react";

import HeaderShowcase from "../organisms/headerShowcase";
import MainArea from "../organisms/mainArea";
import Footer from "../organisms/footer";

export default function Portfolio() {
  return (
    <div>
      {/*Header Showcase*/}

      <HeaderShowcase />

      <div id="page">
        {/*Main Area*/}

        <MainArea />

        {/*Footer*/}

        <Footer />
      </div>
    </div>
  );
}
