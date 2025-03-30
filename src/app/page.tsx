import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6">
            ALMA Proposal Workshop
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-600 mb-8">
            April 1-3, 2025 | KIAA, Peking University
          </p>
          <div className="text-center">
            <Link 
              href="https://www.wjx.top/vm/Qf7QeuW.aspx#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Workshop Overview</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Join us for an intensive workshop focused on Atacama Large Millimeter/submillimeter Array (ALMA) proposal writing and reviewing processes led by ALMA Observatory Scientist John Carpenter. Dr. Carpenter is a member of the ALMA science operations team, responsible for managing the application and allocation of observing time.
            </p>
            <p>
              This workshop is designed for students and postdoctoral researchers interested in utilizing ALMA for their research.            </p>
            <p>
              Through hands-on activities and expert guidance, participants will gain 
              valuable insights into interferometry and proposal preparation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 