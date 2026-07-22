'use client'

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  if(!isOpen) return;

  useEffect(() => {
    function handleEscapeEvent(e) {
      if(e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscapeEvent)

    // Stop Memory Leaking when Component Unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeEvent)
    }
  }, [isOpen])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        onClick={event => { event.stopPropagation() }}
        className="bg-slate-300 p-6 rounded max-w-md"
      >
        <button
          onClick={onClose}
          className="float-right bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
        >
          X
        </button>
        { children }
      </div>

    </div>
  )
}
