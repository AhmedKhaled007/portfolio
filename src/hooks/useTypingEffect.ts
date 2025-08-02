import { useState, useEffect } from 'react';

export const useTypingEffect = (
  text: string,
  speed: number = 100,
  startDelay: number = 0
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    const startTyping = () => {
      let currentIndex = 0;
      
      const type = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = window.setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };

      type();
    };

    if (startDelay > 0) {
      timeoutId = window.setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};