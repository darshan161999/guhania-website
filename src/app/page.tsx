"use client";

export default function Home() {
  // Scroll to Solutions section
  const handleScroll = () => {
    const el = document.getElementById("solutions");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#fbeffb] text-gray-800 flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center text-center animate-fade-in overflow-hidden" style={{ minHeight: '60vh' }}>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 opacity-90" />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-blue-600 to-cyan-400">GUHANIA RESTAURANT GROUP LLC</h1>
        <p className="text-xl sm:text-2xl max-w-2xl mb-10 text-gray-700 font-medium drop-shadow-md">
          Empowering Restaurants with <span className="text-fuchsia-600 font-semibold">Innovative Management</span> & <span className="text-blue-600 font-semibold">AI-Driven Software Solutions</span>
        </p>
        {/* Scroll Down Button */}
        <button
          onClick={handleScroll}
          className="mt-4 p-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 shadow-lg hover:from-blue-500 hover:to-fuchsia-500 transition flex flex-col items-center animate-bounce border-2 border-white/60"
          aria-label="Scroll to Solutions"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          <span className="text-xs text-white mt-1 font-semibold">Scroll Down</span>
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-14 px-6 animate-fade-in-up rounded-3xl shadow-xl bg-white/90 backdrop-blur-md mt-8">
        <h2 className="text-3xl font-bold mb-5 text-fuchsia-700">About Us</h2>
        <p className="text-gray-800 mb-4 text-lg">
          <span className="font-semibold text-blue-700">GUHANIA RESTAURANT GROUP LLC</span> is a visionary leader in the hospitality and restaurant technology space. We manage a diverse portfolio of restaurants—including the renowned <a href="https://passageindia.com/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-700 underline font-semibold">Passage to India in Cambridge</a>—and are at the forefront of developing advanced, AI-powered software tools tailored for the food service industry. Our mission is to empower restaurants to thrive in a rapidly changing world by harnessing the power of technology, data, and automation.
        </p>
        <p className="text-gray-700 mb-4 text-base">
          Our journey began with a passion for exceptional dining experiences and a commitment to operational excellence. Over the years, we have expanded our expertise to include cutting-edge software solutions that address the unique challenges faced by restaurants of all sizes. We believe that the future of hospitality lies in the seamless integration of human creativity and artificial intelligence.
        </p>
        <p className="text-gray-700 mb-4 text-base">
          At <span className="font-semibold text-blue-700">GUHANIA RESTAURANT GROUP LLC</span>, we value innovation, integrity, and collaboration. Our team is made up of industry experts, engineers, and AI specialists who work together to create solutions that are not only powerful but also intuitive and user-friendly. We are dedicated to helping our clients achieve greater efficiency, profitability, and customer satisfaction through smart technology.
        </p>
        <p className="text-gray-700 text-base">
          Whether you are a restaurant owner looking to streamline your operations or a technology professional seeking to make a real-world impact, <span className="font-semibold text-blue-700">GUHANIA RESTAURANT GROUP LLC</span> is your partner in progress. Join us as we shape the future of dining, one innovation at a time.
        </p>
      </section>

      {/* Software Solutions Section */}
      <section id="solutions" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-14 px-4 animate-fade-in-up mt-10 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Solutions</h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {/* Online Delivery Platform - moved to top */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-fuchsia-400">
              <h3 className="font-bold text-xl mb-3 text-fuchsia-700">Integrated Online Delivery Platform</h3>
              <p className="text-gray-700 mb-3">Seamlessly manage online orders and delivery partners with our unified platform. Integrated with <a href="https://rushmyfood.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">RushMyFood</a> and other major delivery services, our solution uses AI to optimize delivery routes, estimate delivery times, and enhance customer satisfaction through real-time tracking and feedback.</p>
              <a href="https://rushmyfood.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white rounded-full font-semibold shadow hover:from-blue-600 hover:to-fuchsia-600 transition">Order with RushMyFood</a>
            </div>
            {/* AI-Powered POS */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-blue-400">
              <h3 className="font-bold text-xl mb-3 text-blue-700">AI-Powered Point of Sale (POS) System</h3>
              <p className="text-gray-700">Our next-generation POS system leverages artificial intelligence to streamline transactions, predict peak hours, and provide actionable sales analytics. The intuitive interface reduces training time and increases staff productivity, while real-time insights help managers make data-driven decisions on the fly.</p>
            </div>
            {/* Smart Inventory Management */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-cyan-400">
              <h3 className="font-bold text-xl mb-3 text-cyan-700">Smart Inventory Management</h3>
              <p className="text-gray-700">Our AI-driven inventory tool automates stock tracking, predicts shortages, and optimizes ordering schedules. By analyzing sales trends and supplier data, it helps reduce waste, prevent overstocking, and ensure that your kitchen is always prepared for demand.</p>
            </div>
            {/* AI-Driven Data Analytics & Marketing Automation */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-purple-400">
              <h3 className="font-bold text-xl mb-3 text-purple-700">AI-Driven Data Analytics & Marketing Automation</h3>
              <p className="text-gray-700">
  Unlock the power of your restaurant&apos;s data with our advanced analytics suite. Our AI algorithms identify customer preferences, forecast trends, and automate personalized marketing campaigns. This enables restaurants to boost customer engagement, increase repeat business, and maximize ROI with minimal manual effort.
</p>

            </div>
            {/* Comprehensive Restaurant Management Platform */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-pink-400 sm:col-span-2">
              <h3 className="font-bold text-xl mb-3 text-pink-700">Comprehensive Restaurant Management Platform</h3>
              <p className="text-gray-700">Our all-in-one platform brings together reservations, staff scheduling, payroll, and compliance management. AI-powered recommendations help optimize labor costs, improve guest experiences, and ensure smooth day-to-day operations. Customizable dashboards provide a holistic view of your business at a glance.</p>
            </div>
            {/* AI Solutions for Day-to-Day Restaurant Challenges */}
            <div className="bg-white/95 rounded-2xl shadow-xl p-7 hover:shadow-2xl transition-shadow border-t-4 border-yellow-400 sm:col-span-2">
              <h3 className="font-bold text-xl mb-3 text-yellow-700">AI Solutions for Day-to-Day Restaurant Challenges</h3>
              <p className="text-gray-700">From dynamic menu pricing based on demand to automated customer feedback analysis, our AI solutions address the everyday pain points of restaurant owners and managers. We help you stay ahead of the competition by turning operational data into actionable insights and smarter business decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="max-w-4xl mx-auto py-14 px-6 animate-fade-in-up rounded-3xl shadow-xl bg-white/90 backdrop-blur-md mt-10">
        <h2 className="text-3xl font-bold mb-5 text-blue-700">Why Work at GUHANIA RESTAURANT GROUP?</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-3 text-lg">
          <li>Work on impactful projects at the intersection of hospitality and technology.</li>
          <li>Collaborate with a diverse team of industry experts, engineers, and AI specialists.</li>
          <li>Drive innovation in restaurant management, automation, and artificial intelligence.</li>
          <li>Ideal for professionals in data analytics, AI, software engineering, and product development.</li>
          <li>Be part of a company that values creativity, continuous learning, and real-world impact.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-100 via-fuchsia-100 to-pink-100 py-12 px-4 animate-fade-in-up mt-10 rounded-3xl shadow-lg max-w-3xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2 text-fuchsia-700">Contact Us</h2>
          <p className="mb-4 text-gray-700 text-lg">Interested in our solutions or joining our team? Reach out to us:</p>
          <div className="flex flex-col items-center space-y-2">
            <span className="font-mono text-blue-700">Email: <a href="mailto:passageincambrige@gmail.com" className="text-fuchsia-700 underline font-semibold">passageincambrige@gmail.com</a></span>
            <span className="font-mono text-blue-700">Phone: <a href="tel:+16174976113" className="text-fuchsia-700 underline font-semibold">+1 617 497 6113</a></span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs text-gray-500 border-t mt-8 animate-fade-in">
        <div>© {new Date().getFullYear()} <span className="text-fuchsia-700 font-semibold">GUHANIA RESTAURANT GROUP LLC</span>. All rights reserved.</div>
      </footer>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
