import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <div className="bg-gray-50 rounded-xl shadow-lg p-10 text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Thanks!</h1>
        <p className="mb-6 text-blue-800">The form was submitted successfully.</p>
        <button
          onClick={() => navigate('/contact')}
          className="text-red-600 hover:underline font-semibold"
        >
          Go back
        </button>
      </div>
    </div>
  );
}