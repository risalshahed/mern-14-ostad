import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'React Template'
  }, [])

  const services = [
    {
      id: crypto.randomUUID(),
      title: 'Web Design',
      description: 'Beatuiful and Responsive Website.'
    },
    {
      id: crypto.randomUUID(),
      title: 'Web Development',
      description: 'Fast and secure web applications.'
    },
    {
      id: crypto.randomUUID(),
      title: 'SEO',
      description: 'Improve your Google ranking.'
    },
  ]

  return (
    <main className="min-h-[85vh]">
     {/* Hero  */}
      <section className="max-w-6xl mx-auto py-16 px-5">

          <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>

                  <h2 className="text-5xl font-bold mb-5">
                      Welcome To My Website
                  </h2>

                  <p className="text-gray-600 mb-6">
                      This is a simple HTML template. Later we will convert this into React.
                  </p>

                  <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-6 py-3 rounded">
                      Learn More
                  </button>

              </div>

              <div>

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                    className="rounded-lg w-full"
                  />

              </div>

          </div>

      </section>
      {/* Services  */}
      <section className="bg-white py-16">

          <div className="max-w-6xl mx-auto px-5">

              <h2 className="text-4xl font-bold text-center mb-10">
                  Our Services
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                  {/* A Service Card */}
                  {
                    services.map(service =>
                      <div
                        key={service.id}
                        className="bg-gray-100 p-6 rounded shadow hover:-translate-y-2 duration-300"
                      >

                          <h3 className="text-xl font-bold mb-3">
                            {service.title}
                          </h3>

                          <p>
                            {service.description}
                          </p>

                      </div>
                    )
                  }

              </div>

          </div>

      </section>
    </main>
  )
}
