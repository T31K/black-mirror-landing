import Navbar from "../components/Navbar";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Black Mirror?",
      answer:
        "Black Mirror is Singapore's latest nightlife destination where luxury and sensory distortion collide. We offer a sophisticated atmosphere with immersive lighting, world-class DJ sets, and premium dining experiences designed to blur the line between reality and fantasy.",
    },
    {
      question: "Where is Black Mirror located?",
      answer:
        "We are located at 9 Raffles Boulevard #02-08/09, Millenia Walk, Singapore 088444. We're easily accessible via public transportation and located in the heart of Singapore's entertainment district.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "Monday to Friday: 12–2pm, 5:30pm–1am | Friday: 12–2pm, 5:30pm–2am | Saturday: 9:30pm–3am | Sunday: Closed",
    },
    {
      question: "Do I need to make a reservation?",
      answer:
        "While walk-ins are welcome, we highly recommend making a reservation, especially for weekends and special events. Reservations ensure you get the best seating and experience. You can book through our website or by calling us directly.",
    },
    {
      question: "What is the dress code?",
      answer:
        "We maintain a smart casual dress code. We recommend elegant attire that matches our sophisticated atmosphere. Sportswear, flip-flops, and beachwear are not permitted. We reserve the right to refuse entry based on dress code compliance.",
    },
    {
      question: "Is there an age restriction?",
      answer:
        "Yes, Black Mirror is strictly for guests aged 21 and above. Valid government-issued photo identification is required for entry. We do not make exceptions to this policy.",
    },
    {
      question: "Do you serve food?",
      answer:
        "Yes, we offer a full dining menu featuring contemporary Asian fusion cuisine and international dishes. Our kitchen is open during all operating hours, and we also offer late-night dining options.",
    },
    {
      question: "What types of events do you host?",
      answer:
        "We host a variety of events including live DJ performances, themed parties, corporate events, private celebrations, and special occasions. Our events calendar is regularly updated with new experiences and world-class entertainment.",
    },
    {
      question: "Can I host a private event at Black Mirror?",
      answer:
        "Absolutely! We offer private event spaces and can accommodate groups of various sizes. Whether it's a birthday celebration, corporate event, or special occasion, our team will work with you to create a memorable experience. Contact us for more details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and cash payments. We also support digital payment methods including PayNow, GrabPay, and other popular Singapore payment platforms.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, Millenia Walk offers convenient parking facilities. Parking rates apply and vary by time. We recommend checking the mall's parking information for current rates and availability.",
    },
    {
      question: "Do you have a minimum spend requirement?",
      answer:
        "Yes, we have minimum spend requirements that vary by table size and location. These requirements help us maintain our premium experience and are communicated at the time of booking. Please contact us for specific details.",
    },
    {
      question: "Can I bring my own cake or decorations?",
      answer:
        "We welcome celebration cakes and small decorations for special occasions. However, we do not allow external catering or large decorative items. Please contact us in advance to discuss your specific requirements.",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Your safety is our priority. We maintain strict security protocols, regular cleaning schedules, and comply with all local health and safety regulations. Our staff is trained in safety procedures and emergency response.",
    },
    {
      question: "Do you offer bottle service?",
      answer:
        "Yes, we offer premium bottle service with a selection of fine spirits, champagne, and wine. Our bottle service includes dedicated staff attention and premium table positioning. Please inquire about our current bottle service offerings.",
    },
    {
      question: "How can I stay updated on events and promotions?",
      answer:
        "Follow us on Instagram for the latest updates, event announcements, and exclusive promotions. You can also subscribe to our newsletter or contact us directly for personalized updates about upcoming events.",
    },
  ];

  return (
    <div id="main">
      <Navbar />

      <main className="relative py-12 lg:pt-28 xl:pt-32 sm:p-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        {/* Hero Section */}
        <div className="relative flex flex-col justify-start pt-24 items-center">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="tracking-tighter text-white font-canterbury text-5xl leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-8 px-3 text-justify text-lg font-normal text-white text-opacity-70 max-w-3xl mx-auto">
                {`Find answers to common questions about Black Mirror. Can't find
                what you're looking for? Contact us directly and we'll be happy
                to help.`}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 z-10">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="backdrop-blur-sm border border-gray-200/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 bg-black/50 backdrop-blur-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 font-theo tracking-widest">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
              <div className="backdrop-blur-sm border border-gray-200/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-theo">
                  Still Have Questions?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our team is here to help. Reach out to us directly for
                  personalized assistance and to learn more about our exclusive
                  experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:events@blackmirror.sg"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Us
                  </a>
                  <a
                    href="tel:+6593251818"
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-neutral-800/80 border border-white/30 backdrop-blur-lg hover:bg-purple-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Email: events@blackmirror.sg</p>
                  <p>Phone: +65 9325 1818</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-transparent">
        <div className="relative">
          <svg
            className="w-full h-24 fill-neutral-800/80"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,120 600,120 900,60 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        <div className="bg-neutral-800/80 text-red-900 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif mb-4 relative text-white inline-block font-canterbury">
                  Location
                </h3>
                <div className="space-y-2 text-base">
                  <p className="font-medium text-white">
                    9 Raffles Boulevard #02-08/09
                    <br />
                    Millenia Walk, Singapore 088444
                  </p>
                </div>
              </div>

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
    </div>
  );
}
