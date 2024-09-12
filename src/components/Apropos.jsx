import cov from "../img/aprop.png";
import { useTranslation } from 'react-i18next';

export default function Apropos() {
  const { t } = useTranslation(); // Utilisation de useTranslation pour les traductions

  return (
    <div id="a-propos" className="relative max-w-screen sm:h-[97vh]">
      <div
        style={{
          backgroundImage: `url(${cov})`,
          backgroundSize: '70vw auto',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-cover h-full -z-20"
      >
        <h1 className="uppercase font-averia pt-12 pl-12 font-bold text-5xl text-[#A95834]">
          {t('apropos.title')} {/* Traduction dynamique du titre */}
        </h1>
        <div className="mt-14">
          <p
            className="ml-auto sm:h-[78vh] text-[#1F2855] sm:w-[75vw] sm:p-20 p-10 max-w-[80vw] sm:text-2xl rounded-l-xl bg-[#f1cb964a]"
            style={{ boxShadow: '0px 4px 18.9px 0px #000000A1' }}
          >
            <span>
              {t('apropos.paragraph1')} {/* Traduction dynamique du premier paragraphe */}
            </span>
            <br /> <br />
            <span className="mt-0 block">
              {t('apropos.paragraph2')} {/* Traduction dynamique du deuxième paragraphe */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
