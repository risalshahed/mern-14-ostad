import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    document.title = 'About - React Template'
  }, [])

  return (
    <main className="min-h-[85vh]">
      <section className="max-w-5xl mx-auto py-16 px-5">
      
        <h2 className="text-4xl font-bold mb-6">
        About Me
        </h2>
        
        <p className="text-gray-700 leading-8">
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sequi.
        
        </p>
      
      </section>
    </main>
  )
}
