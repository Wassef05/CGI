import { aprop } from "../img";
import { useTranslation } from 'react-i18next';

export default function Apropos() {
  const { t } = useTranslation(); // Utilisation de useTranslation pour les traductions

  return (
    <div id="about" className="relative max-w-screen sm:h-[97vh]">
      <div
        style={{
          backgroundImage: `url(${aprop})`,
          backgroundSize: 'contain',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat'
        }}
        className="bg-cover h-full -z-20"
      >
        <h1 className="uppercase pt-16 pl-16 font-averia font-bold text-5xl text-[#A95834]">
          {t('apropos.title')} {/* Traduction dynamique du titre */}
        </h1>
        
        <div className="mt-8 sm:mt-14 flex justify-center sm:block">
          <p
            className="mx-auto sm:h-[78vh] text-[#1F2855] w-[90vw] sm:w-[75vw] p-6 sm:p-20 max-w-[90vw] md:max-w-[80vw] shadow-md sm:text-2xl text-base rounded-lg sm:rounded-l-xl bg-[#f1cb964a]"
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
