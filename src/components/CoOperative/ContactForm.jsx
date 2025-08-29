import React from "react";

const ContactForm = () => {
  return (
    <div
      className="relative w-full min-h-1/2 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6444758/pexels-photo-6444758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", // Replace with chosen image URL
      }}
    >
      {/* Left green semi-transparent overlay */}
      <div className="absolute inset-0 bg-green-500/75 lg:bg-gradient-to-r lg:from-green-500/80 lg:to-transparent"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-4xl p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-transparent">
          <h2 className="text-3xl font-bold text-white mb-6">Get in touch with us</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-white text-sm mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-white/90 text-gray-800 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-white/90 text-gray-800 rounded-md px-4 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-1">City</label>
              <select className="w-full bg-white/90 text-gray-800 rounded-md px-4 py-2 focus:outline-none">
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-sm mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full bg-white/90 text-gray-800 rounded-md px-4 py-2 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-green-400 to-green-600 hover:opacity-90 transition rounded-md px-6 py-2 font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
