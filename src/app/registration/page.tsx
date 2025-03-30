import Image from 'next/image'

export default function Registration() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Registration</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Dates</h2>
            <p className="text-lg text-gray-700">
              Registration Deadline: <span className="font-semibold">March 10, 2025</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Registration Process</h2>
            <div className="prose max-w-none">
              <p>
                To register for the ALMA Proposal Workshop, please complete the following steps:
              </p>
              <ol className="list-decimal pl-6 mt-4">
                <li>Fill out the online registration form</li>
                <li>Complete the pre-workshop questionnaire</li>
                <li>Wait for confirmation email (within 5 business days from the deadline)</li>
              </ol>
              <p className="mt-4">
                Due to limited capacity, participants will be selected based on their 
                research background and motivation for attending the workshop.
              </p>
            </div>
          </section>

          <section className="text-center space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/registration_qrcode.jpg"
                alt="Registration QR Code"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <p className="text-gray-600">
                Scan QR code to register
              </p>
            </div>

            <div className="mt-4">
              <a 
                href="https://www.wjx.top/vm/Qf7QeuW.aspx#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register Now
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 