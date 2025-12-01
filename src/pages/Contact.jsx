import "../../src/indec.css"
export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="lar text-center p-2">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 space-y-10">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.22 11.11 11.11 0 003.45.55 1 1 0 011 1v3.47a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.47a1 1 0 011 1c0 1.18.19 2.33.55 3.45a1 1 0 01-.22 1.11l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Call To Us</h3>
                <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-800 font-medium mt-2">Phone: +8801611112222</p>
              </div>
            </div>
            <hr className="border-gray-200" />
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Write To US</h3>
                <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-gray-800 font-medium mt-2">
                  Emails: customer@exclusive.com<br/>
                  support@exclusive.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-5 py-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full px-5 py-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full px-5 py-4 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
                  required
                />
              </div>

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-gray-50 rounded-lg outline-none resize-none focus:ring-2 focus:ring-red-500 transition"
              ></textarea>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}