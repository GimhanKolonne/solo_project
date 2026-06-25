import React, { useEffect, useState } from 'react';

const TopBar = () => {
  const [text, setText] = useState('');
  const phrases = ['Be Seen | Be SOLO', 'Welcome To SOLO', 'Free Shipping on orders above $20'];
  const typingSpeed = 50;
  const pauseTime = 3000;

  useEffect(() => {
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeOutId;

    const typeText = () => {
      let currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        charIndex--;
        setText(currentPhrase.substring(0, charIndex));

        if (charIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
      } else {
        charIndex++;
        setText(currentPhrase.substring(0, charIndex));

        if (charIndex === currentPhrase.length) {
          clearInterval(timeOutId);
          setTimeout(() => {
            isDeleting = true;
            timeOutId = setInterval(typeText, typingSpeed);
          }, pauseTime);
          return;
        }
      }
    };

    timeOutId = setInterval(typeText, typingSpeed);

    return () => clearInterval(timeOutId);
  }, []);

  return (
    <div className="bg-black uppercase text-white font-mono  py-4 ">
      <div className="container mx-auto flex justify-center px-5 ">
        <div className="md:text-md text-sm text-center">
          {text}
          <span className="text-black"> | </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
