import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import API from '../../api';

export default function FitnessLogin() {
    const navigate = useNavigate(); // ✅ use React Router navigate

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberDevice: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError('');
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(`http://localhost:7000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save token/user if needed
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));

                console.log('Login successful:', data);
                navigate('/'); // ✅ works now
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-black">
            {/* Left side - Image with blur overlay */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                    }}
                />
                {/* Gradient overlay for blending with black background */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/50" />
                {/* Right edge blur for seamless transition */}
                <div className="absolute right-0 top-0 w-5 h-full bg-gradient-to-l from-black via-black/60 to-transparent" />
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 bg-transparent flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">Sign In</h1>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6 backdrop-blur-sm">
                            {error}
                        </div>
                    )}

                    {/* Social Login Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button 
                            type="button"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </button>
                        <button 
                            type="button"
                            className="flex-1 bg-white hover:bg-gray-100 text-gray-900 py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </button>
                        <button 
                            type="button"
                            className="flex-1 bg-white hover:bg-gray-100 text-gray-900 py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        </button>
                    </div>

                    <div className="text-center text-gray-400 mb-6">Or</div>

                    {/* Login Form */}
                    <div className="space-y-4">
                        {/* Email */}
                        <div className="relative group rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 group-hover:border-[#7FFA88] transition-all duration-300"></div>
                            <div className="relative z-10">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-transparent rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7FFA88] transition-all duration-200 disabled:opacity-50"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative group rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 group-hover:border-[#7FFA88] transition-all duration-300"></div>
                            <div className="relative z-10">
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-transparent rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7FFA88] transition-all duration-200 disabled:opacity-50"
                                />
                            </div>
                        </div>

                        {/* Remember Me + Forgot Password */}
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name="rememberDevice"
                                    checked={formData.rememberDevice}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    className="w-4 h-4 text-[#7FFA88] bg-gray-800 border-gray-600 rounded focus:ring-[#7FFA88] focus:ring-2 disabled:opacity-50"
                                />
                                <span className="text-gray-300 text-sm">Remember this device</span>
                            </div>
                            <button 
                                type="button"
                                className="text-[#7FFA88] hover:text-green-300 text-sm underline transition-colors duration-200"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading || !formData.email || !formData.password}
                            className="w-full bg-[#7FFA88] hover:bg-[#6ef67d] text-gray-900 font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-[0_0_15px_4px_#7FFA88] mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                                    Signing In...
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-400 mb-4">Don't have an account?</p>
                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                            className="w-full bg-transparent border border-gray-300 text-white py-3 px-4 rounded-lg transition-all duration-300
                           hover:border-green-400 hover:shadow-[8px_8px_20px_rgba(74,222,128,0.5)]"
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile App Downloads */}
                    <div className="mt-8">
                        <p className="text-white text-center mb-4">Get Mobile Apps</p>
                        <div className="flex gap-4">
                            <button 
                                type="button"
                                className="flex-1 bg-black/80 hover:bg-black border border-gray-700 hover:border-gray-600 text-white py-2 px-3 rounded-lg flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-80">GET IT ON</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </div>
                            </button>
                            <button 
                                type="button"
                                className="flex-1 bg-black/80 hover:bg-black border border-gray-700 hover:border-gray-600 text-white py-2 px-3 rounded-lg flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-80">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}