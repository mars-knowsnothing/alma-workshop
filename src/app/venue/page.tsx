import Image from 'next/image'
import ImageModal from '@/components/ImageModal'

export default function Venue() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Venue Information</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="text-lg text-gray-700">
              This symposium will take place both at the Kavli Institute for Astronomy 
              and Astrophysics at Peking University (KIAA-PKU).
            </p>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
            <p className="text-gray-600">
              To get further information, please pay attention to follow-up notifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Kavli Institute for Astronomy and Astrophysics<br />
                Peking University<br />
                5 Yiheyuan Road<br />
                Haidian District<br />
                Beijing 100871, China
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/venue.png"
                alt="KIAA Building"
                fill
                className="object-contain"
                priority
              />
              <ImageModal
                src="/venue.png"
                alt="KIAA Building"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 