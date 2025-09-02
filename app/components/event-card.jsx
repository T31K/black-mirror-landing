"use client";
import Image from "next/image";

const events = [
  {
    id: 6,
    day: "Saturday",
    date: "06/09/2025",
    title: "DJ Xillix",
    subtitle: "Electronic",
    time: "10pm till late",
    image: "/images/dj/dj_xillix.webp", // Using placeholder until DJ Xillix image is available
    suffix: "th",
  },
  {
    id: 13,
    day: "Saturday",
    date: "13/09/2025",
    title: "DJ Joeru",
    subtitle: "Electronic",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
  {
    id: 20,
    day: "Saturday",
    date: "20/09/2025",
    title: "DJ Tyler Ross",
    subtitle: "Electronic",
    time: "10pm till late",
    image: "/images/dj/dj_tyler_ross.webp", // Using placeholder until DJ Tyler Ross image is available
    suffix: "th",
  },
  {
    id: 27,
    day: "Saturday",
    date: "27/09/2025",
    title: "DJ Joeru",
    subtitle: "Electronic",
    time: "10pm till late",
    image: "/images/dj/dj_joeru.webp",
    suffix: "th",
  },
];

export default function EventCard() {
  return (
    <div className="text-white py-10 px-4 max-w-5xl space-y-1 mx-auto">
      {events.map((event, index) => {
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
                <p className="block md:hidden text-[10px] sm:text-lg uppercase tracking-widest text-gray-400 font-leckerli-one whitespace-nowrap">
                  {`/ ${event.date} /`}
                </p>

                <h3 className="text-lg text-[20px] sm:text-3xl font-semibold">
                  {event.title}
                </h3>
                <p className="text-purple-400 tracking-widest text-xs whitespace-nowrap">
                  {event.subtitle}
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
    </div>
  );
}
