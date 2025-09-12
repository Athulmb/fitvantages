import React from "react";

const AboutPage = () => {
  // ✅ Hero Section Data
  const hero = {
    bgImage:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80",
    qr: {
      text: "You can Explore the Gym",
      img: "https://api.qrserver.com/v1/create-qr-code/?data=https://fitvantage.app&size=150x150",
    },
    title: (
      <>
        All-In-One Solution To{" "}
        <span className="text-green-400">Empower Fitness</span>
        <br />
        <span className="text-green-400">Enthusiasts And Professionals</span>
      </>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    button: "Install The App",
  };

  // ✅ Description Section 1
  const description1 = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "It has survived not only five centuries, but also the leap into electronic typesetting.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "It has survived not only five centuries, but also the leap into electronic typesetting.",
  ];

  const description1Images = [
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80",
  ];

  // ✅ Trainer Section
  const trainerImage =
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80";

  const trainerText = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "It has survived not only five centuries, but also the leap into electronic typesetting.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "It has survived not only five centuries, but also the leap into electronic typesetting.",
  ];

  

  // ✅ Live Classes
  const liveClasses = [
    {
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab?auto=format&fit=crop&w=500&q=80",
      title: "How Regular Physical Activities Help",
      date: "February 29, 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1612300121295-9d39c4d0c9d5?auto=format&fit=crop&w=500&q=80",
      title: "How to Lead a Healthy Lifestyle",
      date: "January 13, 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80",
      title: "Time For Fitness Routines",
      date: "January 22, 2025",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= Hero Section ================= */}
      <section className="relative w-full overflow-hidden">
        <img
          src={hero.bgImage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* QR Box */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 bg-[#2e2e2e] p-4 rounded-lg text-center">
          <p className="text-xs text-white mb-8">{hero.qr.text}</p>
          <img src={hero.qr.img} alt="QR Code" className="w-24 mx-auto" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pt-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] text-white">
            {hero.title}
          </h1>
          <p className="text-gray-300 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
            {hero.description}
          </p>
          <button className="mt-8 px-6 py-3 bg-green-400 text-black font-medium rounded-full hover:bg-lime-300 transition duration-300">
            {hero.button}
          </button>
        </div>
      </section>

      {/* ================= Description Section 1 ================= */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-4">
          {description1.map((text, i) => (
            <p key={i} className="text-sm text-gray-300">
              {text}
            </p>
          ))}
        </div>

        {/* Right Images */}
        <div className="relative flex flex-col items-center gap-4">
          <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg relative">
            <img
              src={description1Images[0]}
              alt="Workout 1"
              className="rounded-md"
            />
            {/* Decorative Dotted Circle */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-dashed border-green-400 rounded-full opacity-40"></div>
          </div>
          <img
            src={description1Images[1]}
            alt="Workout 2"
            className="rounded-md"
          />
        </div>
      </section>

      {/* ================= Trainer Section (Image Left + Text Right) ================= */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Trainer Image with Glow */}
        <div className="relative">
          <div className="absolute -inset-6 bg-green-500 rounded-full blur-3xl opacity-20"></div>
          <img
            src={trainerImage}
            alt="Trainer"
            className="relative z-10 w-full max-w-xs md:max-w-md mx-auto rounded-lg"
          />
        </div>

        {/* Trainer Text */}
        <div className="space-y-4">
          {trainerText.map((text, i) => (
            <p key={i} className="text-sm text-gray-300">
              {text}
            </p>
          ))}
        </div>
      </section>

     

      {/* ================= Live Classes ================= */}
      {/* <section className="px-6 md:px-20 py-12">
        <h2 className="text-lg font-semibold mb-6">Upcoming Live Classes</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {liveClasses.map((cls, i) => (
            <div key={i} className="bg-[#121212] p-4 rounded-lg">
              <img src={cls.img} alt={cls.title} className="mb-2 rounded" />
              <p className="text-sm text-gray-300">{cls.title}</p>
              <p className="text-xs text-gray-500">{cls.date}</p>
            </div>
          ))}

          <div className="flex flex-col justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="w-24"
            />
            <p className="text-xs mt-2 text-gray-400">More</p>
          </div>
        </div>
      </section> */}
      
    </div>
  );
};

export default AboutPage;
