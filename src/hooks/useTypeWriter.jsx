import { useEffect, useState } from "react";

export const useTypeWriter = (texts, speed, infinity = false, loop = false) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let isMounted = true; // Track if the component is still mounted
    let typingInterval;

    const animateTyping = async (texts) => {
      const animate = (text) => {
        return new Promise((resolve) => {
          let charIndex = 0;
          let reverseCharIndex = loop ? text.length : 0;

          typingInterval = setInterval(() => {
            if (charIndex <= text.length) {
              setDisplayText(text.slice(0, charIndex));
              charIndex++;
            } else if (reverseCharIndex > 0) {
              setDisplayText(text.slice(0, reverseCharIndex));
              reverseCharIndex--;
            } else {
              clearInterval(typingInterval);
              resolve();
            }
          }, speed);
        });
      };

      do {
        for (const text of texts) {
          if (!isMounted) break; // Stop if the component is unmounted
          await animate(text);
        }
      } while (infinity && isMounted);
    };

    const normalizedTexts = Array.isArray(texts) ? texts : [texts];
    animateTyping(normalizedTexts);

    // Cleanup function
    return () => {
      isMounted = false;
      clearInterval(typingInterval);
      setDisplayText("");
    };
  }, [texts, speed, infinity, loop]);

  return displayText;
};
