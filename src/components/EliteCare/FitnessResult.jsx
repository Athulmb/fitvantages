import React from "react";

export default function FitnessResultSection() {
    const cardImage = "/Elitecard.png"; // Local image for cards
    const heroImage =
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80";

    return (
<div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 py-32 overflow-hidden">            {/* Hero Image - Absolute Background */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="relative w-full max-w-5xl rounded-xl overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="w-full h-[400px] object-cover"
                    />


                    {/* Green Bars */}
                    <div className="absolute top-1/4 left-6 w-24 h-3 bg-green-500 opacity-60 rounded z-10" />
                    <div className="absolute top-[38%] left-6 w-32 h-3 bg-green-500 opacity-60 rounded z-10" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-6 right-6 text-right z-10">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-400 leading-tight">
                            Lorem<br />Ipsum
                        </h2>
                    </div>

                    {/* Optional Black overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0" />
                </div>
            </div>

            {/* Cards - On top & moved upward */}
            <div className="relative z-20 flex flex-wrap justify-center gap-6 -mt-96">
                {[1, 2, 3, 4].map((_, index) => (
                    <div
                        key={index}
                        className="relative w-40 sm:w-48 rounded-xl overflow-hidden shadow-xl"
                    >
                        <img
                            src={cardImage}
                            alt={`Card ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-end p-4 text-center">
                            <h2 className="text-2xl font-extrabold">~6KG</h2>
                            <p className="text-xs text-gray-300 leading-tight">
                                average weight<br />
                                lost in 3 months
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
