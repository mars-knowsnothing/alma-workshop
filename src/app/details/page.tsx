export default function Details() {
  const schedule = [
    {
      time: "09:30 -- 10:45",
      day1: "ALMA overview",
      day2: "Proposal preparation tips",
      day3: "Breakout session to discuss proposal reviews"
    },
    {
      time: "10:45 -- 11:15",
      day1: "Group Photo & Tea Break",
      day2: "Tea Break",
      day3: "Tea Break"
    },
    {
      time: "11:15 -- 12:30",
      day1: "Radio interferometry and synthesis imaging basics",
      day2: "Breakout session on proposal preparation",
      day3: "Group discussion on proposal reviews"
    },
    {
      time: "12:30 -- 14:00",
      day1: "Lunch Break",
      day2: "Lunch Break",
      day3: "Lunch Break"
    },
    {
      time: "14:00 -- 15:15",
      day1: "Cycle 12 introduction and proposal preparation basics",
      day2: "Proposal review basics",
      day3: "Work on individual proposals"
    },
    {
      time: "15:15 -- 15:45",
      day1: "Tea Break",
      day2: "Tea Break",
      day3: "KIAA Colloquium by John"
    },
    {
      time: "15:45 -- 17:00",
      day1: "OT demonstration",
      day2: "Breakout session on proposal review",
      day3: "KIAA Colloquium by John"
    }
  ]

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Event Details</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Workshop Description</h2>
            <div className="prose max-w-none">
              <p>
                This workshop will focus on the ALMA proposal writing and reviewing 
                process. Participants will engage in hands-on activities including:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Understanding interferometry basics</li>
                <li>Proposal preparation techniques</li>
                <li>Hands-on proposal writing sessions</li>
                <li>Mock proposal review process</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Schedule</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-3 text-left text-gray-800">Time</th>
                    <th className="border p-3 text-left text-gray-800">April 1</th>
                    <th className="border p-3 text-left text-gray-800">April 2</th>
                    <th className="border p-3 text-left text-gray-800">April 3</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((slot, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-3 whitespace-nowrap font-medium text-gray-700">
                        {slot.time}
                      </td>
                      <td className="border p-3 text-gray-600">
                        {slot.day1}
                      </td>
                      <td className="border p-3 text-gray-600">
                        {slot.day2}
                      </td>
                      <td className="border p-3 text-gray-600">
                        {slot.day3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Target Audience</h2>
            <p className="text-gray-600">
              This workshop is primarily designed for students, postdoctoral researchers, and senior researchers interested in utilizing ALMA and applying for its time for their research projects.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 