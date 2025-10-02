"use client";
import Image from "next/image";
const events = [
  // {
  //   id: 6,
  //   day: "Saturday",
  //   date: "06/09/2025",
  //   title: "DJ Fish Winters",
  //   subtitle: "Techno/Trance/Psytrance",
  //   time: "10pm till late",
  //   image: "/images/dj/dj_fish.webp", // Using placeholder until DJ Xillix image is available
  //   suffix: "th",
  // },
  {
    id: 13,
    day: "Saturday",
    date: "13/09/2025",
    title: "DJ Joeru",
    subtitle: "EDM/Techno/Hard Dance",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
  {
    id: 20,
    day: "Saturday",
    date: "20/09/2025",
    title: "DJ Tyler Ross",
    subtitle: "Deep House/Tech House",
    time: "10pm till late",
    image: "/images/dj/dj_tyler_ross.webp", // Using placeholder until DJ Tyler Ross image is available
    suffix: "th",
  },
  {
    id: 27,
    day: "Saturday",
    date: "27/09/2025",
    title: "DJ Joeru",
    subtitle: "EDM/Techno/Hard Dance",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
  {
    id: 0,
    day: "Weekdays",
    date: "Monday to Friday",
    title: "Kate",
    subtitle: "Resident DJ",
    time: "8pm - closing",
    image: "/images/dj/dj_kate.webp",
    suffix: "",
  },
];

const octEvents = [
  {
    id: 4,
    day: "Saturday",
    date: "04/10/2025",
    title: "DJ Joeru",
    subtitle: "EDM/Techno/Hard Dance",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
  {
    id: 11,
    day: "Saturday",
    date: "11/10/2025",
    title: "DJ Shaun Low",
    subtitle: "Melodic Techno/Deep Techno",
    time: "10pm till late",
    image: "/images/dj/dj_shaun.webp",
    suffix: "th",
  },
  {
    id: 18,
    day: "Saturday",
    date: "18/10/2025",
    title: "DJ Joeru",
    subtitle: "EDM/Techno/Hard Dance",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
  {
    id: 25,
    day: "Saturday",
    date: "25/10/2025",
    title: "DJ Oing",
    subtitle: "EDM/Speed House/Hard Dance",
    time: "10pm till late",
    image: "/images/dj/dj_oing.webp",
    suffix: "th",
  },
  {
    id: 0,
    day: "Weekdays",
    date: "Monday to Friday",
    title: "Kate",
    subtitle: "Resident DJ",
    time: "8pm - closing",
    image: "/images/dj/dj_kate.webp",
    suffix: "",
  },
];

export default function EventCard({ isShowPage = false }) {
  return (
    <div className="text-white py-10 px-4 max-w-5xl space-y-1 mx-auto">
      {octEvents.map((event, index) => {
        const isOdd = index % 2 === 0; // 0-based index, so first item (index 0) is "odd" in display

        return (
          <div
            key={index}
            className={`relative flex overflow-hidden shadow-xl ${
              isOdd ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div
              className={`flex  items-center justify-start gap-x-4 py-0 md:py-2 w-2/3 z-[55] ${
                isOdd
                  ? "border-[1.3px] border-gray-400/90 rounded-r-full pl-0 md:pl-10 border-l-0 bg-black/50 backdrop-blur-lg"
                  : "border-[1.3px] border-gray-400/90 rounded-l-full pl-4 md:pl-28 border-r-0 bg-black/50 backdrop-blur-lg"
              }`}
            >
              {/* <p className="text-md text-gray-400 mb-3">{event.date}</p> */}
              <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-0 md:mb-2 tracking-[0px]">
                {event.id === 0 ? "*" : event.id}
                <span className="text-[12px] md:blocktext-[5px] sm:text-[24px] tracking-tights text-white/80">
                  {event.suffix}
                </span>
              </h3>
              <div className="flex flex-col justify-center py-1">
                <p className="hidden md:block text-xs sm:text-md uppercase tracking-widest text-gray-300 font-bold">
                  {`/ ${event.day} - ${event.date} /`}
                </p>
                <p className="block md:hidden text-[10px] sm:text-lg uppercase tracking-widest text-gray-400 whitespace-nowrap">
                  {`/ ${event.date} /`}
                </p>

                <h3 className="text-lg text-[20px] sm:text-3xl font-semibold">
                  {event.title}
                </h3>
                <p className="hidden md:block text-purple-400 tracking-widest font-semibold text-md whitespace-nowrap">
                  {event.subtitle}
                </p>
                <p className="block md:hidden text-purple-400 tracking-widest font-semibold text-xs whitespace-nowrap">
                  {event.subtitle?.split("/")[0]}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`w-[calc(100%/3+7rem)] h-24 sm:h-48 lg:h-auto relative overflow-hidden ${
                isOdd ? "rounded-r-full -ml-20" : "rounded-l-full -mr-20"
              }`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        );
      })}

      {!isShowPage && (
        <a
          href="/events"
          className="block mx-auto w-fit !mt-8 items-center px-8 py-3 text-base font-medium text-white bg-neutral-800/80 border border-white/30 backdrop-blur-lg hover:bg-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
        >
          See All Events
        </a>
      )}
    </div>
  );
}
