import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: 'reveal' | 'rebound';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  animation = 'reveal'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const animationClass = animation === 'reveal' 
    ? 'animate-text-reveal' 
    : 'animate-text-rebound';
  
  return (
    <span 
      className={`inline-block overflow-hidden ${className}`}
    >
      <span 
        className={`inline-block transform ${
          isVisible 
            ? animationClass
            : animation === 'reveal' ? 'translate-y-full opacity-0' : 'scale-0 opacity-0'
        }`}
      >
        {text}
      </span>
    </span>
  );
};

export default AnimatedText;