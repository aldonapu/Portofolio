import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../assets/TypingText.scss';

const TypingText = ({
  text,
  speed = 0.1,
  className = '',
  color = '#ffffff',
  cursor = true,
  cursorColor = '#8b5cf6',
  onComplete = null,
  delay = 0,
  showCursor,
  loop,
  cursorCharacter,
  cursorBlinkDuration
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    if (delay > 0) {
      startTimeRef.current = Date.now() + delay * 1000;
    } else {
      startTimeRef.current = Date.now();
    }

    const type = () => {
      if (startTimeRef.current && Date.now() < startTimeRef.current) {
        timeoutRef.current = setTimeout(type, 50);
        return;
      }

      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
        timeoutRef.current = setTimeout(type, speed * 1000);
      } else {
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    };

    type();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, delay, onComplete]);

  const cursorVariants = {
    blinking: {
      opacity: [1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };

  return (
    <div className={`typing-text-wrapper ${className}`} style={{ color }}>
      <span className="typing-text">{displayedText}</span>
      {cursor && (
        <motion.span
          className="typing-cursor"
          variants={cursorVariants}
          animate="blinking"
          style={{ color: cursorColor }}
        >
          _
        </motion.span>
      )}
    </div>
  );
};

export default TypingText;
