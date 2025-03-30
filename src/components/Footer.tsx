import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Contact</h3>
            <p className="text-gray-600">
              KIAA, Peking University<br />
              5 Yiheyuan Road<br />
              Beijing, China
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/details" className="text-gray-600 hover:text-gray-900">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-600 hover:text-gray-900">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Follow Us</h3>
            <p className="text-gray-600">
              Stay updated with the latest workshop news and announcements.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© 2024 ALMA Proposal Workshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 