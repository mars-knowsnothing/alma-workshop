'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ImageModalProps {
  src: string
  alt: string
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-2 right-2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors shadow-md"
        aria-label="View full size image"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                className="object-contain max-h-[90vh]"
                width={1200}
                height={800}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  )
} 