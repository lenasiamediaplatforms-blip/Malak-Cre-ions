import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  containerClassName = '',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EFE8E2] ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-[#EFE8E2]" />
      )}

      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F5ECE6] to-[#E9DDD5] p-6 text-center text-[#5A4843]">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E5D2C7]">
            <Sparkles className="h-5 w-5 text-[#9F5F51]" />
          </div>
          <span className="font-serif text-sm font-medium tracking-wide text-[#261D1D]">
            {fallbackTitle || 'Malak Cre@ions'}
          </span>
          <span className="mt-1 text-xs text-[#7B6A65]">Beauty & Nail Studio · Giyani</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
