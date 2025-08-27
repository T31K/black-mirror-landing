"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { Drawer } from "vaul";

// Mock event data
const eventsData = [
  {
    id: 1,
    date: "2025-08-15",
    title: "Team Meeting",
    time: "2:00 PM",
    location: "Conference Room A",
    description: "Weekly team sync and project updates",
  },
  {
    id: 2,
    date: "2025-08-22",
    title: "Product Launch",
    time: "10:00 AM",
    location: "Main Auditorium",
    description: "Launch event for our new product line",
  },
  {
    id: 3,
    date: "2025-08-27",
    title: "Client Presentation",
    time: "3:30 PM",
    location: "Virtual Meeting",
    description: "Quarterly review with key client stakeholders",
  },
  {
    id: 4,
    date: "2025-08-29",
    title: "Workshop",
    time: "9:00 AM",
    location: "Training Room",
    description: "Professional development workshop on leadership skills",
  },
];

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Get current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDay = firstDay.getDay();

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Check if a date has events
  const getEventsForDate = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    return eventsData.filter((event) => event.date === dateStr);
  };

  // Handle day click
  const handleDayClick = (day) => {
    const events = getEventsForDate(day);
    if (events.length > 0) {
      setSelectedEvent(events[0]); // Show first event for simplicity
    }
  };

  // Generate calendar days - Always 6 rows (42 days total)
  const generateCalendarDays = () => {
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(
        <div
          key={`empty-start-${i}`}
          className="p-4 sm:p-6 lg:p-8 xl:p-10 flex items-center justify-center border-r border-gray-200/20"
        ></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      const hasEvents = events.length > 0;
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentMonth &&
        new Date().getFullYear() === currentYear;

      days.push(
        <div
          key={day}
          onClick={() => handleDayClick(day)}
          className={`
            p-2 sm:p-3 lg:p-4  text-center relative cursor-pointer transition-colors border border-gray-200/20
            hover:bg-purple-600/20 select-none flex items-start justify-start
            ${
              isToday ? "bg-purple-800/60 text-purple-200/80 font-semibold" : ""
            }
            ${hasEvents ? "hover:bg-purple-50" : ""}
          `}
        >
          <span className="text-base sm:text-lg lg:text-xl xl:text-2xl">
            {day}
          </span>
          {hasEvents && (
            <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-purple-500 rounded-full"></div>
            </div>
          )}
        </div>
      );
    }

    // Fill remaining cells to always have 42 cells (6 rows × 7 days)
    const remainingCells = 42 - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(
        <div
          key={`empty-end-${i}`}
          className="p-4 sm:p-6 lg:p-8 xl:p-10 flex items-center justify-center border-r border-gray-200/20"
        ></div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto bg-purple-950/20 border border-gray-200/50 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="text-white p-4 sm:p-6 lg:p-8 border-b border-gray-200/20 bg-gray-950/60">
        <div className="flex items-center justify-between">
          <button
            onClick={goToPreviousMonth}
            className="p-2 sm:p-3 rounded-full hover:bg-purple-600/20 transition-colors"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </button>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>

          <button
            onClick={goToNextMonth}
            className="p-2 sm:p-3 rounded-full hover:bg-purple-600/20 transition-colors"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 border-y border-gray-200/20">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="p-3 sm:p-4 lg:p-6 text-center text-sm sm:text-base lg:text-lg font-medium text-gray-600 border-r border-gray-200/20"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid - Fixed height with 6 rows */}
      <div className="grid grid-cols-7 gap-0 h-[480px] sm:h-[600px] lg:h-[720px] xl:h-[840px]">
        {generateCalendarDays()}
      </div>

      {/* Event drawer */}
      <Drawer.Root
        open={!!selectedEvent}
        onOpenChange={(open) => !open && setSelectedEvent(null)}
      >
        <Drawer.Portal>
          <Drawer.Content className="z-[555] bg-gray-900 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-black/95 rounded-t-3xl border-t border-gray-200/20 flex-1 py-12">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full mb-8" />
              {selectedEvent && (
                <div className="max-w-md mx-auto space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      Event Details
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-6 h-6 text-blue-500" />
                      <div>
                        <h4 className="font-medium text-white text-lg">
                          {selectedEvent.title}
                        </h4>
                        <p className="text-base text-white/80">
                          {selectedEvent.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-green-500" />
                      <span className="text-base text-white/80">
                        {selectedEvent.time}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-red-500" />
                      <span className="text-base text-white/80">
                        {selectedEvent.location}
                      </span>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-base text-white/80">
                        {selectedEvent.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default CalendarComponent;
