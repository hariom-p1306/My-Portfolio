

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlurBlob from "../../components/BlurBlob/BlurBlob";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        form.current.reset();
        setLoading(false);

        toast.success("Message sent successfully! 🚀", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
        setLoading(false);

        toast.error("Failed to send message ❌", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-[6vw] md:px-[8vw] lg:px-[15vw]"
    >
      {/* Background Glow */}
      <BlurBlob top="25%" left="10%" size="450px" />
      <BlurBlob top="80%" left="90%" size="400px" delay="3s" />

      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">
          Let’s build something amazing together 🚀
        </p>
      </div>

      {/* Form Card */}
      <div className="relative z-10 max-w-lg mx-auto 
        bg-white/5 backdrop-blur-xl 
        border border-purple-500/20 
        rounded-3xl p-10
        shadow-[0_0_50px_rgba(130,69,236,0.4)]
        hover:shadow-[0_0_70px_rgba(130,69,236,0.6)]
        transition duration-500"
      >
        <h3 className="text-2xl text-white text-center mb-8">
          Connect With Me ✨
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name *"
            required
            className="p-4 rounded-lg bg-[#131025] text-white 
            border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-purple-500
            focus:border-purple-500
            transition duration-300"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email *"
            required
            className="p-4 rounded-lg bg-[#131025] text-white 
            border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-purple-500
            focus:border-purple-500
            transition duration-300"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            required
            className="p-4 rounded-lg bg-[#131025] text-white 
            border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-purple-500
            focus:border-purple-500
            transition duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message *"
            required
            className="p-4 rounded-lg bg-[#131025] text-white 
            border border-gray-600
            focus:outline-none focus:ring-2 focus:ring-purple-500
            focus:border-purple-500
            transition duration-300"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-pink-500
            py-3 rounded-lg text-white font-semibold
            hover:scale-105
            shadow-[0_0_25px_rgba(130,69,236,0.6)]
            hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]
            transition duration-300
            disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
