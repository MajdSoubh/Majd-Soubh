import { useEffect, useState } from "react";

export const useTypeWriter = (
  texts,
  speed,
  infinity = false,
  loop = false,
  delayBetweenTexts = 1200
) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let isMounted = true;

    const pause = (duration) =>
      new Promise((resolve) => setTimeout(resolve, duration));

    const animateTyping = async (texts) => {
      do {
        for (const text of texts) {
          if (!isMounted) return;
          for (let charIndex = 0; charIndex <= text.length; charIndex++) {
            setDisplayText(text.slice(0, charIndex));
            await pause(speed);
          }
          if (loop) {
            await pause(delayBetweenTexts);
            for (
              let reverseCharIndex = text.length;
              reverseCharIndex >= 0;
              reverseCharIndex--
            ) {
              setDisplayText(text.slice(0, reverseCharIndex));
              await pause(speed);
            }
          }
        }
      } while (infinity && isMounted);
    };

    animateTyping(Array.isArray(texts) ? texts : [texts]);

    return () => {
      isMounted = false;
      setDisplayText("");
    };
  }, [texts, speed, infinity, loop, delayBetweenTexts]);

  return displayText;
};
