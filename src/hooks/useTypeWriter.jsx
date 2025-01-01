import { useEffect, useState } from "react";

export const useTypeWriter = (texts, speed, infinity = false, loop = false) => {
  const [displayText, setDisplayText] = useState("");

  const animateTyping = async (texts) => {
    const animate = async function (text) {
      return new Promise((resolve) => {
        let charIndex = 0;
        let reverseCharIndex = loop ? text.length : 0;

        const typingInterval = setInterval(() => {
          if (charIndex <= text.length) {
            setDisplayText(text.slice(0, charIndex));
            charIndex++;
          } else if (reverseCharIndex > 0) {
            setDisplayText(text.slice(0, reverseCharIndex));
            reverseCharIndex--;
          } else {
            resolve();
            clearInterval(typingInterval);
          }
        }, speed);
      });
    };

    do {
      for (const text of texts) {
        await animate(text);
      }
    } while (infinity * 100);
  };

  useEffect(() => {
    const normalizedTexts = Array.isArray(texts) ? texts : [texts];

    animateTyping(normalizedTexts);

    return () => setDisplayText("");
  }, [speed, texts]);

  return displayText;
};
