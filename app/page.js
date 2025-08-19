import Calendar from "./components/Calendar";

export default function page() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-stone-900">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex flex-shrink-0">
              <a
                href="#"
                title="Black Mirror"
                className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-red-900"
              >
                <span className="font-canterbury text-2xl lg:text-3xl text-white font-bold tracking-tight">
                  Black Mirror
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-red-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
              <a
                href="#"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Home
              </a>
              <a
                href="#"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Menu
              </a>
              <a
                href="#events"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Events
              </a>
              <a
                href="#gallery"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Gallery
              </a>
              <a
                href="#book-now"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Book Now
              </a>
              <a
                href="#"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-sans text-sm xl:text-base font-medium text-white hover:text-red-200 transition-colors duration-200 underline decoration-transparent hover:decoration-current underline-offset-4"
              >
                FAQs
              </a>

              {/* Instagram Icon */}
              <a
                href="#"
                className="ml-4 p-2 text-white hover:text-red-200 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative pt-24 pb-12 bg-black lg:pt-28 xl:pt-32 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 min-h-screen">
        <div className="relative min-h-screen flex flex-col justify-start pt-24 items-center">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              {/* <Image
              src="/images/title.png"
              alt="Black Mirror"
              className="w-[400px] mx-auto"
              loading="lazy"
              width={1500}
              height={1500}
            /> */}
              <h1 className="tracking-tighter text-white font-canterbury text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[180px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[130px] 2xl:leading-[200px]">
                Black <br />
                Mirror
              </h1>
              <p className=" text-base font-normal text-white text-opacity-70 ">
                {`Black Mirror is Singapore’s latest nightlife destination where luxury and sensory distortion collide. Step into a world of sleek reflections, immersive lighting, and pulsating DJ sets, designed to blur the line between reality and fantasy. At Black Mirror, you don’t just party — you surrender to the night..`}
              </p>
            </div>
          </div>
        </div>
        {/* Gallery Section */}
        <section id="gallery" className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-theo">
                Gallery
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Explore the sophisticated atmosphere and exclusive experiences
                at Black Mirror
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {/* Item 1 - Tall */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-96"></div>
              </div>

              {/* Item 2 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-64"></div>
              </div>

              {/* Item 3 - Square */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-80"></div>
              </div>

              {/* Item 4 - Tall */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-96"></div>
              </div>

              {/* Item 5 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-72"></div>
              </div>

              {/* Item 6 - Short */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-48"></div>
              </div>

              {/* Item 7 - Tall */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-96"></div>
              </div>

              {/* Item 8 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-2xl transition-all duration-300 h-64"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Events Calendar Section */}
        <section id="events" className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-theo ">
                Events Calendar
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Discover our lineup of world-class DJs and exclusive events
              </p>
            </div>

            {/* Calendar Component */}
            <Calendar />

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-300 mb-6">
                Book your table for an unforgettable night.
              </p>
              <a
                href="#book-now"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              >
                Make Reservation
              </a>
            </div>
          </div>
        </section>
        {/* Book Now Section */}
        <section
          id="book-now"
          className="relative py-16 sm:py-20 lg:py-24 z-10"
        >
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-theo">
                Book Now
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Reserve your table for an exclusive night at Black Mirror
              </p>
            </div>

            {/* Reservation Form */}
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="+65 9XXX XXXX"
                    />
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select time</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                    </select>
                  </div>
                </div>

                {/* Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="party-size"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Party Size *
                    </label>
                    <select
                      id="party-size"
                      name="party-size"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select party size</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7">7 people</option>
                      <option value="8">8 people</option>
                      <option value="8+">8+ people</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="occasion"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select occasion (optional)</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Meeting</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any special requests or dietary requirements..."
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="w-4 h-4 text-purple-600 bg-black/50 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-300">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        terms and conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300 underline"
                      >
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Submit Reservation Request
                  </button>
                </div>

                {/* Note */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-400">
                    * Required fields. We'll confirm your reservation within 24
                    hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        ``
      </main>

      {/* Footer Section */}
      <div className="relative bg-black">
        {/* Curvy top border using SVG */}
        <div className="relative">
          <svg
            className="w-full h-24 fill-stone-800"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,120 600,120 900,60 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Footer content */}
        <footer className="bg-stone-800 text-red-900 px-8 py-12 -mt-1">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Location Section */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-4 relative text-white inline-block font-canterbury">
                  Location
                </h3>
                <div className="space-y-2 text-lg">
                  <p className="font-medium text-white">
                    21 Tanjong Pagar Road
                  </p>
                  <p className="text-white">Singapore 088444</p>
                </div>
              </div>

              {/* Hours Section */}
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Hours
                </h3>
                <div className="space-y-4 text-lg">
                  <div>
                    <p className="font-medium text-xl mb-1 text-white">
                      Cocktail
                    </p>
                    <p className="text-white">
                      Tuesday - Saturday: 6pm-10:30pm
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-xl mb-1 text-white">Club</p>
                    <p className="text-white">Tuesday - Friday: 11pm-3am</p>
                    <p className="text-white">Saturday & Eve of PH: 11pm-4am</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Contact
                </h3>
                <div className="space-y-2 text-lg">
                  <p className="underline decoration-white text-white">
                    contact@baescocktailclub.sg
                  </p>
                  <p className="font-medium text-white">(+65) 9017 3087</p>
                  <p className="text-base text-white">
                    (WhatsApp message only)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
