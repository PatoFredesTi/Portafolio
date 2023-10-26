import { useState, useEffect } from 'react';

const TypeWriter = (text: string, speed: number = 100, resetInterval: number = 15000) => {
  const [typedText, setTypedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!typing) return;

    if (typedText === text) {
      const resetTimeout = setTimeout(() => {
        setTypedText('');
        setTyping(true);
      }, resetInterval);

      return () => clearTimeout(resetTimeout);
    }

    const index = typedText.length;
    const nextChar = text.charAt(index);

    const typingTimeout = setTimeout(() => {
      setTypedText((prev) => prev + nextChar);
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [typedText, text, speed, typing, resetInterval]);

  return [typedText, typedText === text];
};

export default TypeWriter;
