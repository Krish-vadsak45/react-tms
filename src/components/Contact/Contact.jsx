// import { React, useState } from "react";
// import { MapPin } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message Sent!");
//   };

//   return (
//     <section className=" py-12 px-6 lg:px-20 text-white bg-[url('./src/assets/taxi-image.png')] bg-cover bg-center bg-repeat h-screen w-full">
//       <div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 h-11/12 w-full">
//         <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">
//           Contact Us
//         </h2>

//         <br />
//         <br />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Details */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <svg
//                 className="w-5 h-5 text-orange-500 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                 />
//               </svg>
//               <p className="text-lg font-semibold">+91 234 5678 900</p>
//             </div>

//             <div className="flex items-center space-x-4">
//               <svg
//                 className="w-5 h-5 text-orange-500 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <p className="text-lg font-semibold">support@quickride.com</p>
//             </div>

//             <div className="flex items-center space-x-4">
//               <MapPin className="w-5 h-5 text-orange-500 mr-2 mt-1" />
//               <p className="text-lg font-semibold">
//                 45 Taxi Street, Mumbai, India
//               </p>
//             </div>

//             {/* Google Map Embed */}
//             <iframe
//               className="w-full h-52 rounded-lg shadow-md"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.441257986271!2d72.877656!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630c1405001%3A0x2c4f75ddf3a45a9!2sMumbai!5e0!3m2!1sen!2sin!4v1631023230123!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-800 p-6 rounded-lg shadow-md"
//           >
//             <div className="mb-4">
//               <label className="block text-yellow-400 font-semibold mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-yellow-400 font-semibold mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-yellow-400 font-semibold mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-md font-semibold transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import {
  Car,
  Phone,
  Shield,
  AlertTriangle,
  MapPin,
  User,
  Clock,
  Send,
  Mail,
  MessageSquare,
  MapPinned,
  Building2,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert("Thank you for your message. We will get back to you soon!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Contact Section */}
      <div className="pt-24 px-4 max-w-7xl mx-auto pb-10">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-red-500/20 mb-4">
            <MessageSquare className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our services? Need support? We're here to help.
            Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-400">24/7 Customer Support:</p>
                  <p className="text-2xl font-bold text-red-500">
                    1-800-QUICK-RIDE
                  </p>
                </div>
              </div>
            </div>
            {/* Google Map Embed */}
            <iframe
              className="w-full h-52 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.441257986271!2d72.877656!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630c1405001%3A0x2c4f75ddf3a45a9!2sMumbai!5e0!3m2!1sen!2sin!4v1631023230123!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">support@quickride.com</p>
                <p className="text-gray-400">business@quickride.com</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <MapPinned className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Transport Hub,</p>
                <p className="text-gray-400">Silicon Valley, CA 94025</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <Building2 className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 8:00 PM
                </p>
                <p className="text-gray-400">
                  Saturday - Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
