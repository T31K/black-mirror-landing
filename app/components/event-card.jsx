"use client";
import Image from "next/image";

const events = [
  {
    id: 23,
    day: "Saturday",
    date: "23/08/2025",
    title: "Shaun Low",
    subtitle: "Melodic Techno",
    time: "10pm till late",
    image: "/images/dj/dj_shaun.webp",
    suffix: "rd",
  },
  {
    id: 30,
    day: "Saturday",
    date: "30/08/2025",
    title: "Nuttrix",
    subtitle: "Progressive House, House Music",
    time: "10pm till late",
    link: "https://linktr.ee/nuttrix",
    image: "/images/dj/dj_nuttrix.webp",
    suffix: "th",
  },
  {
    id: 0,
    day: "Weekdays",
    date: "Ongoing",
    title: "Kate",
    subtitle: "Resident DJ",
    time: "8pm - closing (to be reconfirmed)",
    image: "/images/dj/dj_kate.webp",
    suffix: "",
  },
  {
    id: 0,
    day: "Weekdays",
    date: "Ongoing",
    title: "Casey",
    subtitle: "Guest DJ",
    time: "8pm - closing",
    link: "https://drive.google.com/drive/folders/1h0x3Yt8WQw-rMQT6y_O4-totkG75Urfr",
    image: "/images/dj/dj_casey.webp",
    suffix: "",
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
              className={`flex justify-start gap-x-4 py-0 md:py-2 w-2/3 z-[55] ${
                isOdd
                  ? "border-[1.3px] border-gray-400/90 rounded-r-full pl-4 pl-10 border-l-0 bg-black/50 backdrop-blur-lg"
                  : "border-[1.3px] border-gray-400/90 rounded-l-full pl-6 pl-28 border-r-0 bg-black/50 backdrop-blur-lg"
              }`}
            >
              {/* <p className="text-md text-gray-400 mb-3">{event.date}</p> */}
              <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-0 md:mb-2 tracking-[0px]">
                {event.id === 0 ? "*" : event.id}
                <span className="text-md sm:text-[28px] tracking-tights text-white/80">
                  {event.suffix}
                </span>
              </h3>
              <div className="flex flex-col justify-center py-1">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-theo">
                  {`/ ${event.day} - ${event.date} /`}
                </p>

                <h3 className="text-4xl font-semibold">{event.title}</h3>
                <p className="text-purple-400 tracking-widest text-sm">
                  {event.subtitle}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`w-[calc(100%/3+7rem)] h-32 sm:h-48 lg:h-auto relative overflow-hidden ${
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
