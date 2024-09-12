import cov from "../img/contactcov.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const form = useRef();
  const { t } = useTranslation(); 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(() => {
        console.log('SUCCESS!');
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div id="contact" className="relative pt-20 sm:pt-10">
      <h1 className="uppercase text-center sm:text-left pt-8 px-6 sm:pl-16 font-averia font-bold text-4xl sm:text-5xl text-[#A95834]">
        {t('contact.title')}
      </h1>
      <div className="relative mt-10 sm:mt-16 w-full bg-white">
        <div
          style={{ backgroundImage: `url(${cov})` }}
          className="absolute bottom-0 w-full h-full bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="relative max-w-screen mx-auto p-6  md:grid md:grid-cols-2 md:gap-6 z-10">
          <div className="bg-[#3C3C3C]/80 rounded-r-3xl p-6 px-6  sm:px-8 text-white md:my-auto max-w-md mx-auto sm:ml-0" style={{ marginLeft: "-24px" }}>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h1>{t('contact.info.email')}</h1>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <h1>{t('contact.info.phone')}</h1>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h1 dangerouslySetInnerHTML={{ __html: t('contact.info.address') }}></h1>
              </div>
            </div>
          </div>

          <div className="bg-white/70 rounded-xl p-6 sm:p-8 text-[#3B4862] md:pr-12 py-10">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-lg sm:text-xl font-medium text-black">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="bg-gray-100/60 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg sm:text-xl font-medium text-black">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    className="bg-gray-100/60 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg sm:text-xl font-medium text-black">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="text"
                    name="user_phone"
                    className="bg-gray-100/60 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-lg sm:text-xl font-medium text-black">
                    {t('contact.form.project')}
                  </label>
                  <input
                    type="text"
                    name="projet"
                    className="bg-gray-100/60 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-lg sm:text-xl font-medium text-black">
                  {t('contact.form.message')}
                </label>
                <textarea
                  placeholder="Message"
                  rows="6"
                  name="user_message"
                  className="w-full rounded-md px-4 bg-gray-100/60 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-[#176a82e8] hover:bg-blue-600 tracking-wide rounded-md text-lg sm:text-xl px-4 py-3 w-full mt-6"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
