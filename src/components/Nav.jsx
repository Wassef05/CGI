import { useState, useEffect, useRef } from 'react';
import logo from "../img/logo1.png";
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [logoVisible, setLogoVisible] = useState(true);
  const [langMenuOpen, setLangMenuOpen] = useState(false); // State for the language menu
  const langMenuRef = useRef(null); // Reference for the language menu

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

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false); // Close the language menu after selecting a language
  };

  // Close the language menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false); // Close menu if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center">
          <img
            src={logo}
            className={`mr-3 absolute px-5 mt-6 h-16 sm:h-28 transition-opacity duration-300 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
            alt="Logo"
          />
        </div>

        {/* Responsive menu (mobile) */}
        <div className="flex items-center space-x-4 sm:hidden">
          {/* Language Icon */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
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
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918"
                />
              </svg>
            </button>

            {/* Language menu dropdown */}
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-20">
                <button
                  onClick={() => toggleLanguage('fr')}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {/* French flag SVG */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                    alt="French flag"
                    className="w-5 h-5 mr-2"
                  />
                  FR
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {/* English flag SVG */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt="English flag"
                    className="w-5 h-5 mr-2"
                  />
                  EN
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
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

        {/* Desktop menu */}
        <div className="hidden py-2 sm:flex sm:items-center space-x-8">
          {['home', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-[#1E1E1E] px-6 py-2 rounded-md text-lg font-averia font-extrabold transition duration-300 hover:text-blue-500 hover:bg-white/50"
            >
              {t(`nav.${section}`)}
            </button>
          ))}

          {/* Language menu for desktop */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 ml-10 cursor-pointer hover:text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918"
                />
              </svg>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-20">
                <button
                  onClick={() => toggleLanguage('fr')}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                    alt="French flag"
                    className="w-5 h-5 mr-2"
                  />
                  FR
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt="English flag"
                    className="w-5 h-5 mr-2"
                  />
                  EN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden bg-white/30 ${isOpen ? 'block' : 'hidden'} mt-2 transition-transform duration-300`}>
        {['home', 'about', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="block w-full text-[#1E1E1E] px-4 py-2 text-lg font-averia font-extrabold hover:bg-gray-100"
          >
            {t(`nav.${section}`)}
          </button>
        ))}
      </div>
    </nav>
  );
}
