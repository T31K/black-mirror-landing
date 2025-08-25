import Navbar from "./components/Navbar";
import EventCard from "./components/event-card";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div id="main">
      <Navbar />

      <main className="relative py-12 lg:pt-28 xl:pt-32 sm:p-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="relative min-h-[70dvh] md:min-h-screen flex flex-col justify-start pt-24 items-center">
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
              <h1 className="tracking-tighter text-white font-canterbury text-9xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[180px] leading-[7rem] sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[130px] 2xl:leading-[200px]">
                Black <br />
                Mirror
              </h1>
              <p className="mt-8 px-3 text-justify text-base font-normal text-white text-opacity-70 ">
                {`Black Mirror is Singapore’s latest nightlife destination where luxury and sensory distortion collide. Step into a world of sleek reflections, immersive lighting, and pulsating DJ sets, designed to blur the line between reality and fantasy. At Black Mirror, you don’t just party, you surrender to the night..`}
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
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-96">
                  <Image
                    src="/images/gallery/black_mirror_1.webp"
                    alt="Black Mirror Interior - Sophisticated nightclub atmosphere"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 2 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-64">
                  <Image
                    src="/images/gallery/black_mirror_2.webp"
                    alt="Black Mirror Bar - Premium cocktail experience"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 3 - Square */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-80">
                  <Image
                    src="/images/gallery/black_mirror_3.webp"
                    alt="Black Mirror DJ Booth - World-class sound system"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 4 - Tall */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-96">
                  <Image
                    src="/images/gallery/black_mirror_4.webp"
                    alt="Black Mirror VIP Area - Exclusive seating"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 5 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-72">
                  <Image
                    src="/images/gallery/black_mirror_5.webp"
                    alt="Black Mirror Dance Floor - Immersive lighting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 6 - Short */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-48">
                  <Image
                    src="/images/gallery/black_mirror_6.webp"
                    alt="Black Mirror Lounge - Luxury seating area"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 7 - Tall */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-96">
                  <Image
                    src="/images/gallery/black_mirror_7.webp"
                    alt="Black Mirror Entrance - Sleek modern design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Item 8 - Medium */}
              <div className="break-inside-avoid mb-6">
                <div className="group relative overflow-hidden rounded-lg bg-gray-900 hover:shadow-2xl transition-all duration-300 h-64">
                  <Image
                    src="/images/gallery/black_mirror_8.webp"
                    alt="Black Mirror Night View - Singapore nightlife destination"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            {/* View More Gallery Button */}
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-neutral-800/80 border border-white/30 backdrop-blur-lg hover:bg-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
              >
                View Full Gallery
              </Link>
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

            {/* Event Cards */}
            <EventCard />

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-300 mb-6">
                Book your table for an unforgettable night.
              </p>
              <a
                href="#book-now"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-neutral-800/80 border border-white/30 backdrop-blur-lg hover:bg-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
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
                Reservation
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Reserve your table for an exclusive night at Black Mirror
              </p>
            </div>

            {/* Reservation Form */}
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8">
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
                    {`* Required fields. We'll confirm your reservation within 24
                    hours.`}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bg-transparent">
        {/* Curvy top border using SVG */}
        <div className="relative">
          <svg
            className="w-full h-24 fill-neutral-800/80"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,120 600,120 900,60 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Footer content */}
        <div className="bg-neutral-800/80 text-red-900 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Location Section */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-4 relative text-white inline-block font-canterbury">
                  Location
                </h3>
                <div className="space-y-2 text-base">
                  <p className="font-medium text-white">
                    {`9 Raffles Boulevard #02-08/09`}
                    <br />
                    {`Millenia Walk, Singapore 039596`}
                  </p>
                </div>
              </div>

              {/* Hours Section */}
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Hours
                </h3>
                <div className="space-y-2 text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">
                      Monday to Friday
                    </span>
                    <span className="text-gray-300">12–2pm, 5:30pm–1am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Friday</span>
                    <span className="text-gray-300">12–2pm, 5:30pm–2am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Saturday</span>
                    <span className="text-gray-300">9:30pm–3am</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-serif mb-4 relative inline-block text-white font-canterbury">
                  Contact
                </h3>
                <div className="space-y-2 text-base">
                  <p className="underline decoration-white text-white">
                    events@blackmirror.sg
                  </p>
                  <p className="font-medium text-white">+65 9325 1818</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section */}
    </div>
  );
}
