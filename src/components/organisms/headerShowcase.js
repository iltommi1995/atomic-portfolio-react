import React from "react";
import H1 from "../atoms/h1";
import P from "../atoms/p";
import Button from "../atoms/button";

export default function HeaderShowcase() {
  return (
    <header id="showcase" class="grid">
      <div class="bg-image"></div>
      <div class="content-wrap">
        <H1 title="Welcome to SDVelop" />
        <P
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at
          laudantium similique tenetur cupiditate ratione labore quam qui iste
          quasi!"
        />
        <Button text="Read More" />
      </div>
    </header>
  );
}
