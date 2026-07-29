import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact - React Template'
  }, [])

  return (
    <main className="min-h-[85vh]">
      <section className="max-w-xl mx-auto py-16 px-5">
      
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>
        
        <form className="space-y-5">
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
      
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full border p-3 rounded"
        ></textarea>
      
        <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-6 py-3 rounded">
          Send Message
        </button>
      
        </form>
      
      </section>

    </main>
  )
}
