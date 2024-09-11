import cov from "../img/aprop.png";

export default function Apropos() {
  return (
    <div className="relative max-w-screen sm:h-[97vh]">
      <div
        style={{
          backgroundImage: `url(${cov})`,
          backgroundSize: '70vw auto', // Width of the background image set to 60vw
          backgroundPosition: 'left bottom', // Position the background image to the left
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-cover h-full -z-20"
      >
        <h1 className="uppercase font-averia pt-12 pl-12 font-bold text-5xl text-[#A95834]">
          à propos
        </h1>
        <div className="mt-14">
        <p
  className="ml-auto sm:h-[78vh] text-[#1F2855] sm:w-[75vw] sm:p-20 p-10 max-w-[80vw] sm:text-2xl rounded-l-xl bg-[#f1cb964a]"
  style={{ boxShadow: '0px 4px 18.9px 0px #000000A1' }}
>
  <span>
    COGEB International CGI est une société à responsabilité limitée
    totalement exportatrice non résidente créée en 2002 conformément à
    la loi n° 94-42 du 07/03/1994 telle que modifiée et complétée par la
    loi n° 96-59 du 06/07/1996 et la loi n° 98-102 du 30/11/1998.
  </span>
  <br /> <br />
  <span className="mt-0 block">
    Au capital de 250 milles dinars, COGEB International est spécialisée
    dans le domaine de négoce international soit l’exportation et
    l’importation de marchandises et produits ainsi que dans tout genre
    d’opérations de négoce international et de courtage.
  </span>
</p>
        </div>
      </div>
    </div>
  );
}
