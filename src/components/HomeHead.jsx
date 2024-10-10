
import React from "react";
import {zzzz} from "../img"; 
import {headerbg} from "../img";
import "./HomeHead.css";

export default function HomeHead() {
  return (
    <section id="accueil" name="accueil">
      
      <picture>
        <source media="(max-width: 640px)" srcSet={zzzz} />
        <source media="(min-width: 641px)" srcSet={headerbg} />
        <img
          src={headerbg} 
          alt="Image de couverture"
          className="bg bg-no-repeat h-[100vh] w-full"
          loading="lazy"
        />
      </picture>
    </section>
  );
}
