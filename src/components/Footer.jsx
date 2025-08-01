import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaLinkedinIn,
  } from "react-icons/fa6";
  
  export default function Footer() {
    return (
      <footer className="bg-black text-white px-6 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left section */}
          <div className="max-w-sm">
          <div className="flex items-center">
              <img src="/logo.png" alt="FitVantage Logo" className="w-30 h-8" />
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>




          
  
          {/* Middle section - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Our Services</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div className="flex flex-col gap-4">
  {/* App Store Box */}
  <div className="border border-gray-500 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
    <img src="/applestore.png" alt="Apple" className="w-10 h-10" />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-400">Download on the</p>
      <p className="text-sm font-semibold">App Store</p>
    </div>
  </div>

  {/* Google Play Box */}
  <div className="border border-gray-500 rounded-lg px-3 py-2 flex items-center gap-2 w-fit">
    <img src="/playstore.png" alt="Google Play" className="w-10 h-10" />
    <div className="text-left leading-tight">
      <p className="text-[10px] text-gray-400">Get it on</p>
      <p className="text-sm font-semibold">Google Play</p>
    </div>
  </div>
</div>

          </div>
        </div>
  
        {/* Bottom section - Social Icons */}
        <div className="flex gap-4 mt-10 justify-end pr-6">
          {[FaYoutube, FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Icon className="text-black text-sm" />
              </div>
            )
          )}
        </div>
      </footer>
    );
  }
  