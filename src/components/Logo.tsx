import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  useCustomLogo?: boolean; // Toggle between custom and SVG logo
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', useCustomLogo = true }) => {
  const sizeClasses = {
    sm: 'h-14 w-auto',  // Slightly smaller than nav for padding
    md: 'h-20 w-auto',  // Almost full nav height 
    lg: 'h-22 w-auto'   // Full height for large
  };

  // If using custom logo (when you upload your file)
  if (useCustomLogo) {
    return (
      <Image
        src="/logo.png?v=2" 
        alt="Plank & Brush - Flooring & Painting"
        width={672}
        height={192}
        className="w-auto h-48 object-contain"
        style={{
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
          transform: 'scale(2.16) translateZ(10px)'
        }}
        unoptimized
        priority
      />
    );
  }

  // Fallback SVG logo (current design)
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* SVG Logo Icon */}
      <svg 
        className={sizeClasses[size]} 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plank/Floor boards */}
        <rect x="10" y="35" width="40" height="4" rx="1" fill="#8B4513" />
        <rect x="10" y="41" width="40" height="4" rx="1" fill="#A0522D" />
        <rect x="10" y="47" width="40" height="4" rx="1" fill="#8B4513" />
        
        {/* Paint brush */}
        <rect x="25" y="8" width="3" height="20" rx="1" fill="#4A5568" />
        <path 
          d="M23 28 L32 28 L30 35 L25 35 Z" 
          fill="#E53E3E" 
        />
        <circle cx="26.5" cy="8" r="4" fill="#3182CE" stroke="#2C5282" strokeWidth="1" />
        
        {/* Paint drop */}
        <circle cx="35" cy="15" r="2" fill="#3182CE" opacity="0.8" />
        
        {/* Decorative elements */}
        <rect x="8" y="33" width="44" height="1" fill="#2D3748" opacity="0.3" />
      </svg>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <span className="font-bold text-gray-900 text-xl leading-none">
          Plank & Brush
        </span>
        <span className="text-sm text-blue-600 font-medium leading-none mt-0.5">
          Painting & Flooring
        </span>
      </div>
    </div>
  );
};

// Text-only version for simpler use cases
export const LogoText: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`${className}`}>
      <span className={`font-bold text-gray-900 ${sizeClasses[size]}`}>
        Plank <span className="text-blue-600">&</span> Brush
      </span>
    </div>
  );
};