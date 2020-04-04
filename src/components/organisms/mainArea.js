import React from "react";

import SectionA from "./sectionA";
import SectionB from "./sectionB";
import SectionC from "./sectionC";
import SectionD from "./sectionD";

export default function MainArea() {
  return (
    <main id="main">
      {/*Section A*/}
      <SectionA />

      {/*Section B*/}
      <SectionB />

      {/*Section C*/}
      <SectionC />

      {/*Section D*/}
      <SectionD />
    </main>
  );
}
