const Footer = () => {
  return (
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
                  9 Raffles Boulevard #02-08/09
                  <br />
                  Millenia Walk, Singapore 039596
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
                    Monday to Thursday
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
  );
};

export default Footer;
