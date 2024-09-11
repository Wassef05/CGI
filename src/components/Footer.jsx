import logo from "../img/footerlogo.png";

export default function Footer() {
  return (
    <div className="w-full">
      <div className="bg-[#176A82] py-8">
        <div className="mx-auto w-full max-w-screen px-4 py-6 lg:py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex items-center justify-center md:justify-start">
              <img className="sm:ml-12" src={logo} alt="Footer Logo" />
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    A Propos De Nous
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    COGEB
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    AL-BARKA
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    SOPRODI
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    COGEB INTERNATIONNAL
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Download
              </h2>
              <ul className="text-white text-center md:text-left">
                <li className="mb-4">
                  <a href="mailto:cogebimmobiliere@gmail.com" className="hover:underline">
                    cogebimmobiliere@gmail.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+21673323435" className="hover:underline">
                    +216 73 323 435
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Avenue de l environnement, Sousse, Tunisia, 4000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#145c6b] py-4">
        <div className="text-center text-white">
          <p className="text-sm">
            © {new Date().getFullYear()} . All rights reserved.
          </p>
          <p className="text-xs">
            Developed by SilverLine Solution
          </p>
        </div>
      </div>
    </div>
  );
}
