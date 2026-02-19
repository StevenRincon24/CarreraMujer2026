import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-feminine-pink text-white hover:bg-feminine-pink/90 focus:ring-feminine-pink",
    secondary: "bg-feminine-purple text-white hover:bg-feminine-purple/90 focus:ring-feminine-purple",
    tertiary: "bg-white text-feminine-pink border-2 border-feminine-pink hover:bg-feminine-lavender focus:ring-feminine-pink"
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;