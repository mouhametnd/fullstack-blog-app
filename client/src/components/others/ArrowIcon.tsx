import React from 'react';

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-6  stroke-cyanGreen-100 pt-[9px] transition-transform ${className}`}>
      <path d="M1 6l4-4 4 4" strokeWidth="2" fill="none" fillRule="evenodd" />
    </svg>
  );
};

export default ArrowIcon;
