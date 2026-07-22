// File 11

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-5 bg-white max-w-5xl mx-auto"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Contact Me
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-3 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded p-3 outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded p-3 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full border rounded p-3 outline-none resize-none"
          ></textarea>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}