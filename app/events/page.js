import Navbar from "../components/Navbar";
import EventCard from "../components/event-card";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <div id="main">
      <Navbar />

      <main className="relative py-12 lg:pt-28 xl:pt-32 sm:p-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <section className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-4 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-leckerli-one">
                Our Events
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Full list of events happening at <br />{" "}
                <span className="text-white text-4xl font-canterbury">
                  Black Mirror
                </span>
              </p>
            </div>

            {/* Event Cards */}
            <EventCard isShowPage={true} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
