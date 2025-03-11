'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8">
      <div className="relative w-48 h-48">
        <Image
          src="/images/sun.svg"
          alt="Cheerful smiling sun"
          fill
          className="object-contain"
          priority
        />
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
        hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 
        font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95"
      >
        Click me
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full m-4">
            <h2 className="text-2xl font-bold mb-4">Hello World</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </main>
  );
} 