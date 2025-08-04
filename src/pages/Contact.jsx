import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        email: '',
        message: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const countries = [
        { code: '+1', name: 'United States' },
        { code: '+44', name: 'United Kingdom' },
        { code: '+91', name: 'India' },
        { code: '+86', name: 'China' },
        { code: '+49', name: 'Germany' },
        { code: '+33', name: 'France' },
        { code: '+81', name: 'Japan' },
        { code: '+61', name: 'Australia' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCountrySelect = (country) => {
        setFormData(prev => ({
            ...prev,
            country: country.code
        }));
        setIsDropdownOpen(false);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div
        className="min-h-screen pt-[80px] md:pt-[100px] sm:pt-[150px] flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/contactbg.png')" }}
      >
            
       

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-top relative z-10">

                {/* Left Side - Text Content */}
                <div className="text-white space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Get In Touch With Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industrytouch With Us
                    </p>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-[#2D2D2D] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl relative">
                    <div className="space-y-6">

                        {/* Name Field */}
                        <div >
                            <label htmlFor="name" className="block  text-gray-300 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-[#535353] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* WhatsApp Number Section */}
                        <div>
                            <label htmlFor="whatsapp" className="block text-gray-300 text-sm font-medium mb-2">
                                WhatsApp number
                            </label>

                            {/* Country Code Dropdown */}
                            <div className="relative mb-3">
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full px-4 py-3 bg-[#535353] border border-gray-600 rounded-lg text-white text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 flex items-center justify-between"
                                >
                                    <span>
                                        {formData.country || 'Select Country(+0)'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                                        {countries.map((country) => (
                                            <button
                                                key={country.code}
                                                type="button"
                                                onClick={() => handleCountrySelect(country)}
                                                className="w-full px-4 py-3 text-left text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-between"
                                            >
                                                <span>{country.name}</span>
                                                <span className="text-gray-400">{country.code}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm">
                                We never call your phone
                            </p>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                E-mail<span className="text-red-400 ml-1">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 bg-[#535353] py-3 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full px-4 py-3 bg-[#535353] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                                placeholder="Enter your message"
                            />
                        </div>

                        {/* Privacy Policy Text */}
                        <div className="text-white text-sm">
                            By submitting this page, you are agreeing to the privacy policy with <br />  hyperlink to the privacy policy.

                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-black font-semibold py-2 px-[90px] rounded-md bg-gradient-to-r from-[#7FFA88] to-[#5CFB78] shadow-[0_2px_10px_rgba(0,0,0,0.8),0_0_20px_#4FFF70] transition-all duration-300 transform hover:scale-105 focus:outline-none"
                        >
                            Submit
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}