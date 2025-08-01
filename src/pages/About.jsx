import React from "react";

const AboutPage = () => {
    return (
        <div className="bg-black text-white">
    <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
            src="/AboutBG.png"
            alt="Background"
            className="w-full h-auto object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pt-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                All-In-One Solution To <br />
                <span className="text-green-400">Empower Fitness</span> <br />
                <span className="text-green-400">Enthusiasts And Professionals</span>
            </h1>

            <p className="text-gray-300 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

            <button className="mt-8 px-6 py-3 bg-green-400 text-black font-medium rounded-full hover:bg-lime-300 transition duration-300">
                Install The App
            </button>
        </div>
    </section>




            {/* Description Section 1 */}
            <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-sm text-gray-300 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm text-gray-300">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="https://images.unsplash.com/photo-1571019613914-85f342c1d1a7"
                        alt="Workout 1"
                        className="rounded-md"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
                        alt="Workout 2"
                        className="rounded-md"
                    />
                </div>
            </section>

            {/* QR Section */}
            <section className="px-6 md:px-20 flex justify-end">
                <div className="bg-[#121212] p-4 rounded-lg shadow-lg">
                    <p className="text-xs text-gray-300">You can also explore our app</p>
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?data=https://fitvantage.app&size=100x100"
                        alt="QR Code"
                        className="w-24 mt-2"
                    />
                </div>
            </section>

            {/* Trainer Image Section */}
            <section className="px-6 md:px-20 py-10">
                <img
                    src="https://images.unsplash.com/photo-1594737625785-cdfb0c4e7b19"
                    alt="Trainer"
                    className="w-full max-w-xs md:max-w-md mx-auto rounded"
                />
            </section>

            {/* Description Section 2 */}
            <section className="px-6 md:px-20 grid md:grid-cols-2 gap-10 py-10">
                <div>
                    <p className="text-sm text-gray-300 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm text-gray-300">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div>
                    <p className="text-sm text-gray-300 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className="text-sm text-gray-300">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </section>

            {/* Live Classes Section */}
            <section className="px-6 md:px-20 py-12">
                <h2 className="text-lg font-semibold mb-6">Upcoming Live Classes</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {/* Live Card 1 */}
                    <div className="bg-[#121212] p-4 rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1603398938378-8b0d65b4aa7b"
                            alt="Live Class 1"
                            className="mb-2 rounded"
                        />
                        <p className="text-sm text-gray-300">How Regular Physical Activities Help</p>
                        <p className="text-xs text-gray-500">February 29, 2025</p>
                    </div>

                    {/* Live Card 2 */}
                    <div className="bg-[#121212] p-4 rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1612300121295-9d39c4d0c9d5"
                            alt="Live Class 2"
                            className="mb-2 rounded"
                        />
                        <p className="text-sm text-gray-300">How to Lead a Healthy Lifestyle</p>
                        <p className="text-xs text-gray-500">January 13, 2025</p>
                    </div>

                    {/* Live Card 3 */}
                    <div className="bg-[#121212] p-4 rounded-lg">
                        <img
                            src="https://images.unsplash.com/photo-1558611848-73f7eb4001ab"
                            alt="Live Class 3"
                            className="mb-2 rounded"
                        />
                        <p className="text-sm text-gray-300">Time For Fitness Routines</p>
                        <p className="text-xs text-gray-500">January 22, 2025</p>
                    </div>

                    {/* Playstore Icon */}
                    <div className="flex flex-col justify-center items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                            alt="Play Store"
                            className="w-24"
                        />
                        <p className="text-xs mt-2 text-gray-400">More</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
