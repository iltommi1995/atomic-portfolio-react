import React from "react";

import H2 from "../atoms/h2";
import P from "../atoms/p";

export default function SectionA() {
  return (
    <section id="section-a" class="grid">
      <div class="content-wrap">
        <H2 text="Web & Application Development" />
        <div class="content-text">
          <P
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            tempore vero numquam nostrum excepturi culpa corrupti magni
            expedita, explicabo animi aliquid ipsa est omnis quisquam quibusdam,
            rem cumque voluptate velit quas repellendus mollitia. Quam ullam,
            facilis ex dolorum praesentium deleniti."
          />
        </div>
      </div>
    </section>
  );
}
