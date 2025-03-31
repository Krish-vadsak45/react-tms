import { useState } from "react";
import { Link } from "react-router";
import {
  Users,
  Shield,
  Award,
  Target,
  Heart,
  Zap,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function imgGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      title: "Vishal Shingana",
      img: "./src/assets/vishal.png",
      description: "Experience New York, Nonstop",
      details: "Travel Time: 15 Hours, 15 Minutes",
    },
    {
      title: "Krish Vadsak",
      img: "./src/assets/krish.png",
      description: "Exclusive Member Benefits",
      details: "Join Today for Premium Services",
    },
    {
      title: "Yug Suthar",
      img: "./src/assets/yug.png",
      description: "Global Network Partners",
      details: "Access to 26+ Airlines Worldwide",
    },
    {
      title: "Keval Sakariya",
      img: "./src/assets/keval.png",
      description: "Shop Anytime, Anywhere",
      details: "Exclusive Online Deals",
    },
  ];

  return (
    <div>
      <main className="min-h-screen bg-black text-white">
        {/* Our Story Section */}
        <section id="our-story" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-orange-500 mb-8"></div>
                <div className="space-y-6 text-gray-300">
                  <p>
                    QuickRide was founded in 2015 by a group of entrepreneurs
                    who were frustrated with the unreliable and inefficient taxi
                    services in urban areas. They envisioned a transportation
                    platform that would leverage technology to provide a
                    seamless, safe, and affordable experience for riders.
                  </p>
                  <p>
                    What started as a small operation with just 10 cars in one
                    city has now grown into a nationwide network with thousands
                    of drivers serving millions of customers. Our journey hasn't
                    been without challenges, but our commitment to innovation
                    and customer satisfaction has driven our growth.
                  </p>
                  <p>
                    Today, QuickRide is recognized as a leader in the
                    transportation industry, setting new standards for service
                    quality, driver welfare, and technological advancement. We
                    continue to evolve and expand our services to meet the
                    changing needs of our customers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-600 rounded-lg opacity-50"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    width={800}
                    height={600}
                    alt="QuickRide founding team"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-600 rounded-lg opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 hover:shadow-lg hover:shadow-orange-900/20 transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To provide safe, reliable, and affordable transportation
                  services that empower people to move freely and connect with
                  their communities. We strive to create positive experiences
                  for both riders and drivers through innovative technology and
                  exceptional service.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 hover:shadow-lg hover:shadow-orange-900/20 transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To transform urban mobility by building the most trusted
                  transportation network in every city we serve. We envision a
                  future where transportation is seamless, sustainable, and
                  accessible to everyone, reducing the need for personal vehicle
                  ownership and creating more livable cities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do at QuickRide, from how
                we develop our technology to how we treat our customers and team
                members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-gray-400">
                  We prioritize the safety of our riders, drivers, and
                  communities above all else.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">People-Centered</h3>
                <p className="text-gray-400">
                  We build relationships based on trust, respect, and a genuine
                  desire to improve lives.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-400">
                  We strive for excellence in everything we do, constantly
                  raising the bar for ourselves.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                <p className="text-gray-400">
                  We're committed to making a positive difference in the
                  communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Achievements */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Awards & Recognition</h3>
              <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 flex items-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Best Ride-Hailing App</h4>
                  <p className="text-sm text-gray-400">
                    Tech Innovation Awards, 2023
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 flex items-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Excellence in Customer Service
                  </h4>
                  <p className="text-sm text-gray-400">
                    National Transport Association, 2022
                  </p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 flex items-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    Top 50 Fastest Growing Companies
                  </h4>
                  <p className="text-sm text-gray-400">Business Weekly, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-3 bg-gradient-to-b from-black to-gray-900">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals driving QuickRide's mission forward
            </p>
          </div>
        </section>
      </main>
      <div className="flex flex-col md:flex-row w-full  h-96 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden cursor-pointer transition-all duration-500
            ${hoveredIndex === index ? "md:flex-[1.2]" : "md:flex-[0.8]"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* img */}
            <div className="absolute inset-0 w-full h-full">
              <img // ✅ Standard <img> for React
                src={item.img || "/placeholder.svg"}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === index ? "" : "grayscale"
                }`}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6 z-10">
              {/* Title always visible */}
              <div>
                <h2 className="text-white text-2xl font-bold">{item.title}</h2>
                {item.subtitle && (
                  <h3 className="text-white text-2xl font-bold">
                    {item.subtitle}
                  </h3>
                )}
                {hoveredIndex === index && (
                  <div className="h-1 w-32 bg-red-600 mt-2"></div>
                )}
              </div>

              {/* Details only visible on hover */}
              {hoveredIndex === index && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-2">
                    <p className="text-white text-xl font-medium">
                      {item.description}
                    </p>
                    <p className="text-white">{item.details}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
