import Image from 'next/image';
import { useState } from 'react';

interface HelloModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAnimated?: boolean;
}

export default function HelloModal({ isOpen, onClose, isAnimated = false }: HelloModalProps) {
  const [isMoon, setIsMoon] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  if (!isOpen) return null;

  const getImageSrc = () => {
    if (!isAnimated) return "/images/sun.svg";
    // Add timestamp to prevent caching issues
    return isMoon ? `/images/moon.svg?t=${Date.now()}` : "/images/sun-animated.svg";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-12 rounded-lg shadow-xl max-w-4xl w-full m-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Hello World</h2>
        <div className="relative w-96 h-96 mb-8">
          <Image
            key={`${isAnimated}-${isMoon}-${Date.now()}`}
            src={getImageSrc()}
            alt={isMoon ? "Smiling crescent moon" : "Cheerful smiling sun"}
            fill
            className="object-contain"
            priority
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center text-red-500">
              Error loading image. Please try refreshing.
            </div>
          )}
        </div>
        {isAnimated && (
          <button
            onClick={() => {
              setImageError(false);
              setIsMoon(!isMoon);
            }}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
          >
            Switch to {isMoon ? "Sun" : "Moon"}
          </button>
        )}
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
} 