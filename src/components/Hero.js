import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { FaTwitter, FaTelegramPlane, FaCalendarAlt } from 'react-icons/fa';

function Hero({ tracksRef }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="bg-black text-white relative">
      <img src={Logo} alt="Logo" width={50} className="absolute top-2 left-2" />
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-400/20 via-black/0 via-black/0 via-black/0 to-black/0">
        <div className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="font-hero bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Open Name Service Framework
              <span className="sm:block">  </span>
            </h1>
            <p className="mx-auto font-mono mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              A universe of sovereign name services
            </p>
            <div className="font-mono mt-8 flex flex-wrap justify-center gap-4">
              <button
                className="block w-full text-xl rounded bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 px-12 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                onClick={toggleModal}
              >
                Beta test it
              </button>
              <button
                className="block w-full text-xl rounded border border-indigo-400 px-12 py-3 text-sm font-medium text-indigo-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                
              >
                <a href="https://github.com/decentldotland/onsf">Read the docs</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <>
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleModal}></div>
          <div className="fixed inset-0 min-w-40 z-50 flex items-center justify-center" onClick={toggleModal}>
            <div className="bg-black border border-pink-300 p-10 rounded-md space-y-4 w-100">
              <h2 className="text-center text-white font-semibold text-2xl mb-8">Get in touch to join the beta</h2>
              <a href="https://t.me/onsfchat" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2 rounded-md">
                <FaTelegramPlane className="mr-2" />
                Chat on Telegram
              </a>
              <a href="https://twitter.com/decentdotland" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-black border border-white text-white py-2 rounded-md">
                <FaTwitter className="mr-2" />
                DM on Twitter
              </a>
              <a href="https://calendly.com/onsfbeta/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-black border border-white text-white py-2 rounded-md">
                <FaCalendarAlt className="mr-2" />
                Book a call
              </a>
            </div>
          </div>
        </>
      )}

    </section>
  );
}

export default Hero;
