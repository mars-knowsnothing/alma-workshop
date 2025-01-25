export default function Organizers() {
  const scientificCommittee = [
    "Gregory Herczeg",
    "Ruobing Dong",
    "Ke Wang",
    "Ran Wang"
  ]

  const localCommittee = [
    "Min Sun",
    "Ruobing Dong"
  ]

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Organizing Committees</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Scientific Organizing Committee</h2>
            <ul className="space-y-3">
              {scientificCommittee.map((member, index) => (
                <li 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {member}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Local Organizing Committee</h2>
            <ul className="space-y-3">
              {localCommittee.map((member, index) => (
                <li 
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {member}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
} 