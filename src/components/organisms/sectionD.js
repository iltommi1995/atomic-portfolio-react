import React from "react";
import H2 from "../atoms/h2";
import P from "../atoms/p";

export default function SectionD() {
  return (
    <section id="section-d" class="grid">
      <div class="box">
        <H2 text="Contact Us" />
        <P
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
          mollitia facilis veniam perspiciatis veritatis accusamus labore
          consequatur quidem explicabo."
        />
        <P text="contact@gmail.com" />
      </div>
      <div class="box">
        <H2 text="About Our Company" />
        <P
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          obcaecati sint modi similique quas sequi adipisci quibusdam inventore
          dolor voluptatibus, laborum omnis quo delectus vitae ducimus veniam
          impedit. Illum, nostrum?"
        />
      </div>
    </section>
  );
}
