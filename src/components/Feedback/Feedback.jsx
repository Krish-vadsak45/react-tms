import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MessageSquare,
  Star,
  Send,
  ThumbsUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("ride");
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Feedback Drives Us Forward
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We value your opinion and are committed to continuously improving
              our service based on your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-6 px-8">
              <h2 className="text-2xl font-bold">Share Your Experience</h2>
              <p className="text-gray-100">
                Help us serve you better by providing your valuable feedback
              </p>
            </div>

            <form className="p-8 space-y-6">
              {/* Feedback Type */}
              <div>
                <label className="block text-lg font-medium mb-4">
                  What would you like to give feedback about?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      id: "ride",
                      label: "Recent Ride",
                      icon: <Star className="w-5 h-5" />,
                    },
                    {
                      id: "app",
                      label: "Mobile App",
                      icon: <MessageSquare className="w-5 h-5" />,
                    },
                    {
                      id: "service",
                      label: "Customer Service",
                      icon: <ThumbsUp className="w-5 h-5" />,
                    },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFeedbackType(type.id)}
                      className={`flex items-center justify-center p-4 rounded-lg border-2 transition-colors ${
                        feedbackType === type.id
                          ? "border-orange-500 bg-orange-500/10 text-white"
                          : "border-gray-700 hover:border-gray-600 text-gray-300"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                          {type.icon}
                        </div>
                        <span>{type.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-lg font-medium mb-2">
                  How would you rate your experience?
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hoverRating || rating) >= star
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-4 text-gray-300">
                    {rating === 1 && "Poor"}
                    {rating === 2 && "Fair"}
                    {rating === 3 && "Good"}
                    {rating === 4 && "Very Good"}
                    {rating === 5 && "Excellent"}
                  </span>
                </div>
              </div>

              {/* Ride Details (conditional) */}
              {feedbackType === "ride" && (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="ride-id"
                      className="block text-sm font-medium mb-2"
                    >
                      Ride ID (optional)
                    </label>
                    <input
                      type="text"
                      id="ride-id"
                      placeholder="e.g. QR12345678"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <p className="mt-1 text-sm text-gray-400">
                      You can find this in your ride receipt
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="driver-name"
                      className="block text-sm font-medium mb-2"
                    >
                      Driver Name (optional)
                    </label>
                    <input
                      type="text"
                      id="driver-name"
                      placeholder="Driver's name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}

              {/* Feedback Details */}
              <div>
                <label
                  htmlFor="feedback-details"
                  className="block text-lg font-medium mb-2"
                >
                  Tell us more about your experience
                </label>
                <textarea
                  id="feedback-details"
                  rows={5}
                  placeholder="Please share your thoughts, suggestions, or concerns..."
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Would you like us to follow up with you?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contact-preference"
                      className="w-4 h-4 text-orange-600"
                      defaultChecked
                    />
                    <span className="ml-2">Yes, please contact me</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contact-preference"
                      className="w-4 h-4 text-orange-600"
                    />
                    <span className="ml-2">No, just sharing feedback</span>
                  </label>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Attach a screenshot or photo (optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-gray-700/50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-100">
                        Drag and drop or click to upload
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                    <input type="file" className="opacity-0" />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How We Use Feedback */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Use Your Feedback
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your feedback is invaluable to us. Here's how we put it to work:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Improve Services</h3>
              <p className="text-gray-400">
                We analyze feedback to identify areas for improvement and
                enhance our services to better meet your needs.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Recognize Excellence
              </h3>
              <p className="text-gray-400">
                Positive feedback helps us recognize and reward drivers and
                staff who provide exceptional service.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Address Concerns</h3>
              <p className="text-gray-400">
                We take all concerns seriously and work diligently to resolve
                issues and prevent them from recurring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Happens After You Submit
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gray-700"></div>

              {/* Timeline Items */}
              {[
                {
                  title: "Immediate Confirmation",
                  description:
                    "You'll receive an immediate confirmation that your feedback has been received.",
                  icon: <Clock className="w-6 h-6" />,
                },
                {
                  title: "Review & Analysis",
                  description:
                    "Our dedicated team reviews your feedback and categorizes it for appropriate action.",
                  icon: <MessageSquare className="w-6 h-6" />,
                },
                {
                  title: "Action Taken",
                  description:
                    "Depending on the nature of your feedback, we take appropriate action, which may include driver coaching, app improvements, or service enhancements.",
                  icon: <CheckCircle className="w-6 h-6" />,
                },
                {
                  title: "Follow-up (if requested)",
                  description:
                    "If you've requested a follow-up, a member of our customer experience team will contact you to discuss your feedback.",
                  icon: <ThumbsUp className="w-6 h-6" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 mb-12 md:mb-16 flex flex-col md:flex-row items-center"
                >
                  <div
                    className={`flex items-center justify-center order-1 md:order-${
                      index % 2 === 0 ? 1 : 3
                    } w-full md:w-1/2 pb-8 md:pb-0 md:pr-8 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div
                      className={`bg-gray-800 rounded-xl p-6 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                  </div>

                  <div
                    className={`hidden md:block order-${
                      index % 2 === 0 ? 3 : 1
                    } w-1/2 pl-8`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question:
                  "How long will it take to get a response to my feedback?",
                answer:
                  "We aim to respond to all feedback that requires a follow-up within 24-48 hours. For urgent matters, please use our emergency contact option instead.",
              },
              {
                question: "Can I provide feedback anonymously?",
                answer:
                  "Yes, you can submit feedback without providing your contact information. However, if you'd like us to follow up with you or address a specific concern, we'll need your contact details.",
              },
              {
                question: "Will my feedback affect my driver's rating or job?",
                answer:
                  "We use feedback constructively. Positive feedback helps recognize great service, while constructive criticism is used for coaching and improvement. We have fair processes in place to ensure drivers are treated equitably.",
              },
              {
                question: "How can I check the status of my feedback?",
                answer:
                  "If you've provided your email address, you'll receive updates on the status of your feedback. You can also contact our customer support team with your feedback reference number for an update.",
              },
              {
                question: "Can I update my feedback after submitting it?",
                answer:
                  "Yes, you can provide additional information or update your feedback by contacting our customer support team and referencing your original submission.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  {expanded === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  )}
                </button>

                {expanded === index && (
                  <div className="p-5 bg-gray-800 rounded-b-lg mt-px">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feedback;
