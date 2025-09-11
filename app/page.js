import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventCard from "./components/event-card";
import ReservationForm from "./components/ReservationForm";
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
              <h1 className="title tracking-tighter text-white font-canterbury text-9xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px] 2xl:text-[180px] leading-[7rem] sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[130px] 2xl:leading-[200px]">
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
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-leckerli-one">
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
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-leckerli-one ">
                Events Calendar
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Discover our lineup of world-class DJs and exclusive events
              </p>
            </div>

            {/* Event Cards */}
            <EventCard />

            {/* Call to Action */}
          </div>
        </section>
        {/* Book Now Section */}
        <section
          id="book-now"
          className="relative py-16 sm:py-20 lg:py-24 z-10"
        >
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-leckerli-one">
                Reservation
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Reserve your table for an exclusive night at Black Mirror
              </p>
              <a
                href="https://www.opentable.sg/r/black-mirror-reservations-singapore?restref=301505&lang=en-US&ot_source=Restaurant%20website"
                className="inline-flex items-center px-8 py-3 !mt-4 text-base font-medium text-white bg-neutral-800/80 border border-white/30 backdrop-blur-lg hover:bg-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
              >
                Make Reservation
              </a>
            </div>
            {/* Reservation Form */}
            {/* <ReservationForm /> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
