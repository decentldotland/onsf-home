import React, { useState } from 'react';
import { FaTwitter, FaTelegramPlane, FaCalendarAlt } from 'react-icons/fa';

function Track(props) {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="font-mono p-5 max-w-xl m-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <div className="flex justify-between">
          <div>
            <h5 className="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.content.title}
            </h5>
          </div>
          {props.content.icon ? (
            <div className="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.content.icon}
            </div>
          ) : (
            <img
              src={props.content.pic}
              height="auto"
              width="25"
              className="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900"
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>
      </a>
      <p className="mb-5 mt-5 font-normal text-gray-700">
        {props.content.desc}
      </p>

      <button

        href={props.content.ctaLink}
        onClick={props.content.icon === '+' && toggleModal}
        className={`button inline-flex ${props.content.disabled} items-center py-2 text-sm font-medium text-center text-black bg-white rounded-lg focus:outline-none}`}
      >
        {props.content.cta}
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
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

    </div>
  );
}

export default Track;
