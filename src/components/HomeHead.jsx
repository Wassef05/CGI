import React from "react";
import {cgicov, headerbg} from "../img"; 
import { down } from "../img"; // Importation de l'icône 'down'
import "./HomeHead.css";

export default function HomeHead() {
  return (
    <section id="accueil" name="accueil" className="relative">
      
      <picture>
        <source media="(max-width: 640px)" srcSet={cgicov} />
        <source media="(min-width: 641px)" srcSet={headerbg} />
        <img
          src={headerbg} 
          alt="Image de couverture"
          className="bg bg-no-repeat h-[100vh] w-full"
          loading="lazy"
        />
      </picture>

      {/* Titre et flèche vers le bas */}
      <div className="arrow-down-container text-center">
        <h2 className="text-white text-lg md:text-2xl mb-2 animate-pulse">
          Découvrez plus
        </h2>
        {/* Utilisation de l'icône 'down' importée */}
        <img
          src={down} // Votre icône personnalisée importée
          alt="Flèche vers le bas"
          className="h-20 w-20 arrow-down mx-auto"
        />
      </div>

    </section>
  );
}
