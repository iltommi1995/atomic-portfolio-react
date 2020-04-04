import React from "react";

import Card from "../molecules/card";

export default function SectionB() {
  return (
    <section id="section-b" class="grid">
      <ul>
        <li>
          <Card
            source="https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg"
            title="Web Development"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                    ex cumque error consequatur architecto. Molestias similique vero
                    eveniet veniam suscipit."
          />
        </li>
        <li>
          <Card
            source="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg"
            title="Mobile Applications"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit sint quisquam nam sit corrupti enim nostrum officia,
                quasi accusantium odit."
          />
        </li>
        <li>
          <Card
            source="https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg"
            title="Tech Marketing"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus non, sunt asperiores nemo autem reprehenderit!
                Inventore eos nisi nobis aliquid."
          />
        </li>
      </ul>
    </section>
  );
}
