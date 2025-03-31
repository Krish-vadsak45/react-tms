import { React, useState } from "react";
import { MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className=" py-12 px-6 lg:px-20 text-white bg-[url('./src/assets/taxi-image.png')] bg-cover bg-center bg-repeat h-screen w-full">
      <div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 h-11/12 w-full">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          Contact Us
        </h2>

        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-lg font-semibold">+91 234 5678 900</p>
            </div>

            <div className="flex items-center space-x-4">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-lg font-semibold">support@quickride.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-orange-500 mr-2 mt-1" />
              <p className="text-lg font-semibold">
                45 Taxi Street, Mumbai, India
              </p>
            </div>

            {/* Google Map Embed */}
            <iframe
              className="w-full h-52 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.441257986271!2d72.877656!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630c1405001%3A0x2c4f75ddf3a45a9!2sMumbai!5e0!3m2!1sen!2sin!4v1631023230123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-yellow-400 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-yellow-400 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-yellow-400 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-md font-semibold transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
