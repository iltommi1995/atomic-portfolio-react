import React from "react";
import P from "../atoms/p";

export default function HeaderShowcase() {
  return (
    <header id="showcase" class="grid">
      <div class="bg-image"></div>
      <div class="content-wrap">
        <h1>Welcome to Acme Web Solutions</h1>
        <P
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at
          laudantium similique tenetur cupiditate ratione labore quam qui iste
          quasi!"
        />
        <a href="#section-b" class="btn">
          Read More
        </a>
      </div>
    </header>
  );
}
