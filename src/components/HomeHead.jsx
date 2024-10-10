// import cov from "../img/headerbg.png";

// export default function HomeHead() {
//   return (
//     <div className=" ">
//       <div
//         style={{ backgroundImage: `url(${cov})` }}
//         className="bg-cover bg-center bg-no-repeat bg-fixed h-[100vh] w-full -z-20"
//       >
//       </div>
//     </div>
//   );
// }
import React from "react";
import covSmall from "../img/zzzz.png";  // Image pour mobile
import covLarge from "../img/headerbg.png";  // Image pour desktop
import "./HomeHead.css";

export default function HomeHead() {
  return (
    <section id="accueil" name="accueil">
      {/* Utilisation du tag <picture> pour les images responsives */}
      <picture>
        <source media="(max-width: 640px)" srcSet={covSmall} />
        <source media="(min-width: 641px)" srcSet={covLarge} />
        <img
          src={covLarge} // Image fallback pour les vieux navigateurs
          alt="Image de couverture"
          className="bg bg-no-repeat h-[100vh] w-full"
          loading="lazy"
        />
      </picture>
    </section>
  );
}
