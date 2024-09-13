import { useTranslation } from 'react-i18next';
import logo from "../img/footerlogo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Section principale du footer */}
      <div className="bg-[#176A82] py-8">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Mise en page en grille adaptée aux différentes tailles d'écrans */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            
            {/* Logo du footer */}
            <div className="flex items-center justify-center md:justify-start">
              <img className="sm:ml-12 max-w-[200px]" src={logo} alt="Footer Logo" />
            </div>
            
            {/* Liens à propos/contact */}
            <div className="flex items-center justify-center md:justify-start">
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="#a-propos" className="hover:underline">
                    {t('footer.aboutUs')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#contact" className="hover:underline">
                    {t('footer.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Liens des autres entités */}
            <div className="flex items-center justify-center md:justify-start">
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t('footer.cogeb')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t('footer.alBarka')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t('footer.soprodi')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t('footer.cogebInternational')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Informations de contact */}
            <div className="flex flex-col items-center justify-center md:items-start">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase text-center md:text-left">
                {t('footer.contactTitle')}
              </h2>
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="mailto:cogebimmobiliere@gmail.com" className="hover:underline">
                    {t('footer.email')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+21673323435" className="hover:underline">
                    {t('footer.phone')}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {t('footer.address')}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Section inférieure du footer */}
      <div className="bg-[#145c6b] py-4">
        <div className="text-center text-white">
          <p className="text-sm">
            © {new Date().getFullYear()} . {t('footer.rightsReserved')}
          </p>
          <p className="text-xs">
            {t('footer.developedBy')}
          </p>
        </div>
      </div>
    </div>
  );
}
