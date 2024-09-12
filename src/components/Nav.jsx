import { useState, useEffect } from 'react';
import logo from "../img/logo1.png";
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setLogoVisible(currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed w-full z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center">
          <img
            src={logo}
            className={`mr-3 absolute mt-[5rem] px-11 h-36 p-4 sm:h-48 transition-opacity duration-300 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
            alt="Logo"
          />
        </div>
        {/* Responsive menu (mobile) */}
        <div className="flex items-center space-x-4 sm:hidden">
          <button
            onClick={toggleLanguage}
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden py-2 sm:flex sm:items-center space-x-8">
          <button onClick={() => scrollToSection('accueil')} className="text-[#1E1E1E]  px-6 py-2 rounded-md text-lg font-averia font-extrabold">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('a-propos')} className="text-[#1E1E1E] px-6 py-2 rounded-md text-lg font-averia font-extrabold">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-[#1E1E1E] px-6 py-2 rounded-md text-lg font-averia font-extrabold">
            {t('nav.contact')}
          </button>
          <svg
            onClick={toggleLanguage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 h-6 w-6 ml-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
      </div>
      {/* Menu items */}
      <div className={`sm:hidden bg-white/30 ${isOpen ? 'block' : 'hidden'} mt-2`}>
        <button onClick={() => scrollToSection('accueil')} className="block w-full text-[#1E1E1E] px-4 py-2 text-lg font-averia font-extrabold">
          {t('nav.home')}
        </button>
        <button onClick={() => scrollToSection('a-propos')} className="block w-full text-[#1E1E1E] px-4 py-2 text-lg font-averia font-extrabold">
          {t('nav.about')}
        </button>
        <button onClick={() => scrollToSection('contact')} className="block w-full text-[#1E1E1E] px-4 py-2 text-lg font-averia font-extrabold">
          {t('nav.contact')}
        </button>
      </div>
    </nav>
  );
}
``
