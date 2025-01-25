import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-gray-900">
            ALMA Workshop
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/details" className="text-gray-600 hover:text-gray-900">
              Event Details
            </Link>
            <Link href="/organizers" className="text-gray-600 hover:text-gray-900">
              Organizers
            </Link>
            <Link href="/registration" className="text-gray-600 hover:text-gray-900">
              Registration
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
} 