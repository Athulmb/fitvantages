import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

export default function FitnessLogin() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="flex w-full max-w-8xl shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Background Image with Overlay */}
                <div
                    className="w-1/2 hidden md:block bg-cover bg-center"
                    style={{
                        backgroundImage: "url('Group 1000005332.png')",
                        filter: "brightness(0.6)",
                    }}
                ></div>

                {/* Right Side - Login Form */}
                <div className="w-full md:w-1/2 bg-[#0e0f0f] p-10">
                    <h2 className="text-3xl font-bold mb-6 text-white">Sign in</h2>

                    {/* Social Buttons */}
                    <div className="flex gap-4 mb-4">
                        <button className="bg-blue-700 w-10 h-10 rounded text-white">f</button>
                        <button className="bg-white w-10 h-10 rounded text-black">G</button>
                        <button className="bg-black w-10 h-10 rounded text-white"></button>
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="flex-grow h-px bg-gray-700"></div>
                        <span className="px-3 text-sm text-gray-400">Or</span>
                        <div className="flex-grow h-px bg-gray-700"></div>
                    </div>

                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="text-sm text-gray-400">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username here"
                            className="w-full px-4 py-2 mt-1 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-1 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none"
                        />
                    </div>

                    {/* Remember Me + Forgot Password */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> Remember this device
                        </label>
                        <a href="#" className="text-green-400">Forgot Password?</a>
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full py-2 bg-green-400 text-black font-semibold rounded shadow-green-400 shadow-lg hover:bg-green-300">
                        Sign In
                    </button>

                    {/* Sign Up */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400">Don't have an account?</p>
                        <button
                            onClick={() => navigate("/signup")}
                            className="w-full mt-2 py-2 border border-green-400 rounded hover:bg-green-400 hover:text-black">
                            Sign Up
                        </button>
                    </div>


                    {/* Mobile App Icons */}
                    <div className="flex justify-center mt-6 gap-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-10"
                        />
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="h-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}