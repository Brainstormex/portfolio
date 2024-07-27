import React, {useEffect} from 'react'

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
  }

export default function Toast ({ message, type, onClose } : ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 3000);
        return () => clearTimeout(timer);
      }, [onClose]);
    
      return (
        <div
          className={`fixed top-20 right-4 z-50 px-4 py-2 text-white rounded-md shadow-lg ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message}
          <button onClick={onClose} className="ml-4 text-xl font-bold focus:outline-none">
            ×
          </button>
        </div>
      );
}
