'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/details"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Event Details
            </Link>
            <Link
              href="/venue"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Venue
            </Link>
            <Link
              href="/organizers"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Organizers
            </Link>
            <Link
              href="/registration"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 