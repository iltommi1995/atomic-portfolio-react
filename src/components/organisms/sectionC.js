import React from "react";
import H2 from "../atoms/h2";
import P from "../atoms/p";

export default function SectionC() {
  return (
    <section id="section-c" class="grid">
      <div class="content-wrap">
        <H2 text="We handle all of your digital needs" />
        <P
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente hic
          et repellat dolorem non illo repudiandae sint officiis quod error."
        />
      </div>
    </section>
  );
}
