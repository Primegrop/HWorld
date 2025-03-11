'use client';

import { useState } from 'react';
import Image from 'next/image';
import HelloModal from '@/components/HelloModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <div className="relative w-96 h-96">
        <Image
          src="/images/sun.svg"
          alt="Cheerful smiling sun"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
          hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 
          font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95"
        >
          Click me
        </button>
        <button
          onClick={() => setIsSecondModalOpen(true)}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg 
          hover:from-green-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 
          font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95"
        >
          Click me too!
        </button>
      </div>

      <HelloModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <HelloModal 
        isOpen={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
        isAnimated={true}
      />
    </main>
  );
} 