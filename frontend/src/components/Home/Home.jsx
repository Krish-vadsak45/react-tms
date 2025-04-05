import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Clock,
  Wallet,
  Shield,
  CreditCard,
  ChevronRight,
  DollarSign,
  Navigation,
  Star,
  Download,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [stats, setStats] = useState([
    {
      id: 1,
      imgSrc: "./src/assets/buildings.png",
      value: 0,
      maxValue: 300,
      title: "Cities covered",
      description: "Across India, Australia, New Zealand, and the UK",
    },
    {
      id: 2,
      imgSrc: "./src/assets/diagram.png",
      value: 0,
      maxValue: 40000000,
      title: "Yearly rides",
      description: "Booked by our customers every year",
    },
    {
      id: 3,
      imgSrc: "./src/assets/distance.png",
      value: 0,
      maxValue: 100000000,
      title: "Kilometers on Taxi",
      description: "Distance covered on Quickride taxi within a year of launch",
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("entry created", entry);
        } else {
          setIsVisible(false);
          // resetStats(); // Reset stats when out of viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible]);

  const startAnimation = () => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        let allReached = true;
        const newStats = prevStats.map((stat) => {
          if (stat.value < stat.maxValue) {
            allReached = false;
            return {
              ...stat,
              value: Math.min(
                stat.value + Math.ceil(stat.maxValue / 100),
                stat.maxValue
              ),
            };
          }
          return stat;
        });

        if (allReached) clearInterval(interval);
        return newStats;
      });
    }, 50);
  };

  // const resetStats = () => {
  //   setStats((prevStats) => prevStats.map((stat) => ({ ...stat, value: 0 })));
  // };

  const apiKey =
    "yilPvIBDkUeSfXZCMxlHJRKu2zMbUy9DDFlUjnFDZiAdZG6m4Ei2cEQhRKoR5V2E";
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  // const [showbookride, setShowbookride] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [distance, setDistance] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const sendData = async ()=>{
       
    const tripData =  {pickup, destination, distance, estimatedPrice}

    const response = await fetch("http://localhost:3000/api/data/Trip",{
      method:"POST",
      headers:{
        "Content-type" : "application/json"
      },
      body: JSON.stringify(tripData)
    })

    if (response.ok) {
      return;
    }else{
      console.error("Ride is not booked!");
    }
  }

  const handleConfirmRide = async (e) => {
    e.preventDefault();
    if (pickup && destination) {
      await calculateDistance();
      setShowConfirmation(true);
      setShowForm(false);
    }

    await sendData();
 
  };

  const calculateDistance = async () => {
    if (!pickup || !destination) {
      alert("Please enter both pickup and destination locations.");
      return;
    }

    const pickupEncoded = encodeURIComponent(pickup);
    const destinationEncoded = encodeURIComponent(destination);
    const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${pickupEncoded}&destinations=${destinationEncoded}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Log the response for debugging

      if (
        data.status === "OK" &&
        data.rows.length > 0 &&
        data.rows[0].elements.length > 0
      ) {
        const element = data.rows[0].elements[0];
        if (element.status === "OK") {
          // `Distance: ${element.distance.text}, Duration: ${element.duration.text}`
           setDistance(element.distance.text);
           setEstimatedTime(element.duration.text);
           setEstimatedPrice(
            Math.round(parseFloat(element.distance.text)) * 10
          );
          // setShowConfirmation(true);
        } else if (element.status === "ZERO_RESULTS") {
          console.log("No results found for the given locations.");
        } else {
          console.log("Unable to find distance.");
        }
      } else {
        console.log("Invalid response from API.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      feedback:
        "QuickRide has been my go-to taxi service for the past year. The drivers are always professional and the cars are clean. I love how easy it is to book a ride through the app!",
    },
    {
      name: "Michael Smith",
      role: "Business Traveler",
      feedback:
        "I frequently travel for work, and QuickRide has never let me down. Their service is punctual, and I always feel safe no matter the time of day.",
    },
    {
      name: "Emily Davis",
      role: "Frequent Rider",
      feedback:
        "The convenience and affordability of QuickRide make it my preferred choice for daily commutes. The drivers are friendly, and the app experience is seamless!",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-gray-700 min-h-screen">
      {/* Main Section */}
      <section className="w-full flex flex-col lg:flex-row justify-evenly items-center text-center text-white px-6 pt-24 pb-24">
        {/* Left Content */}
        <div className="flex flex-col items-center space-y-6">
          <div
            className={`space-y-6 min-w-[570px] animate-fade-in transition-transform duration-1000 ease-in-out ${
              showForm ? "animate-slide-up" : "translate-y-0"
            }`}
          >
            <h1 className="text-5xl font-bold">Your Ride, Your Way</h1>
            <p className="text-2xl">
              Fast, reliable, and affordable taxi service at your fingertips.
            </p>
          </div>
          {!showForm && !showConfirmation && (
            <button
              className="px-10 py-4 mt-8 rounded-full bg-black shadow-md text-lg uppercase tracking-wider transition-all duration-500 hover:tracking-widest hover:bg-yellow-400 hover:text-black cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              Book a Ride
            </button>
          )}
          {showForm && !showConfirmation && (
            <div className="p-6 rounded-lg shadow-lg min-w-[570px] animate-slide-up mr-10 bg-transparent transition-transform duration-2000 ease-in-out">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirmRide(e);
                }}
                className="m-8 max-md:w-[400px] bg-transparent"
              >
                <div className="relative mb-6">
                  <input
                    type="text"
                    required
                    className="peer w-full px-2 py-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-gray-400"
                    placeholder=" "
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                  <label className="absolute left-2 top-0 text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-gray-100 peer-valid:-top-4 peer-valid:text-gray-100">
                    Pickup Location
                  </label>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    required
                    className="peer w-full px-2 py-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-gray-400"
                    placeholder=" "
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  <label className="absolute left-2 top-0 text-white transition-all duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-gray-100 peer-valid:-top-4 peer-valid:text-gray-100">
                    Destination
                  </label>
                </div>

                <div className="text-center">
                  <button
                    id="calculate"
                    className="relative px-6 py-3 text-white uppercase transition-all duration-300 bg-yellow-500 rounded-md shadow-lg hover:bg-yellow-600 hover:shadow-yellow-500/50 cursor-pointer"
                  >
                    Confirm Ride
                  </button>
                </div>
              </form>
            </div>
          )}
          {showConfirmation && (
            <div className="w-full max-w-md space-y-2">
              <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                <h2 className="text-2xl font-bold">Ride Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-400">Pickup</p>
                      <p className="font-medium">{pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Navigation className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-400">Destination</p>
                      <p className="font-medium">{destination}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-gray-700 pt-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>Estimated Time: {estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span>Estimated Price: ${estimatedPrice}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === "card"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="text-red-500 focus:ring-red-500"
                    />
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700/50">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={selectedPayment === "cash"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="text-red-500 focus:ring-red-500"
                    />
                    <Wallet className="h-5 w-5 text-gray-400" />
                    <span>Cash</span>
                  </label>
                </div>

                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg mt-6 transition-colors cursor-pointer"
                  onClick={() => {
                    console.log("Ride booked successfully!");
                    toast.success("Ride booked successfully!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                    toast.success("Enjoy your ride!", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });

                    setTimeout(() => {
                      setShowConfirmation(false);
                    }, 3000);
                    setPickup("");
                    setDestination("");
                    setShowForm(false);
                    setDistance(0);

                  }}
                >
                  BOOK NOW - ${estimatedPrice}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-0">
          <img
            src="./src/assets/taxi-image.png"
            alt="Taxi"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-md lg:max-w-lg scale-110"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-blue-50 md:text-4xl font-bold mb-4">
              Why Choose QuickRide
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110 hover:rotate-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-3">
                Quick Pickups
              </h3>
              <p className="text-gray-300">
                Get picked up within minutes of booking your ride
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110 hover:rotate-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-3">
                Live Tracking
              </h3>
              <p className="text-gray-300">
                Track your ride in real-time with our advanced GPS system
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110 hover:rotate-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-3">
                Safe Rides
              </h3>
              <p className="text-gray-300">
                All drivers are verified and vehicles regularly inspected
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110 hover:rotate-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl text-gray-50 font-semibold mb-3">
                Easy Payments
              </h3>
              <p className="text-gray-300">
                Multiple payment options including cash, card, and wallet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              How QuickRide Works
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
              Getting a ride is easier than ever with our simple 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <div className="text-center">
                <h3 className="text-xl text-white font-semibold mb-3">
                  Book Your Ride
                </h3>
                <p className="text-gray-300">
                  Enter your pickup location and destination in our app
                </p>
              </div>
              <div className="hidden md:block absolute top-10 right-0 w-1/2 h-1 bg-orange-600"></div>
            </div>

            <div className="relative">
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <div className="text-center">
                <h3 className="text-xl text-white font-semibold mb-3">
                  Get Matched
                </h3>
                <p className="text-gray-300">
                  We'll connect you with the nearest available driver
                </p>
              </div>
              <div className="hidden md:block absolute top-10 right-0 w-1/2 h-1 bg-orange-600"></div>
            </div>

            <div>
              <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <div className="text-center">
                <h3 className="text-xl text-white font-semibold mb-3">
                  Enjoy Your Ride
                </h3>
                <p className="text-gray-300">
                  Sit back and relax as your driver takes you to your
                  destination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className=" bg-black">
        <section className="py-16 px-6 text-white text-center transition-opacity duration-700">
          <h2 className="text-3xl font-bold mb-10">
            Global mobility ecosystem driving <br /> communities forward
          </h2>

          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row justify-center items-center gap-12"
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center max-w-xs"
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={stat.imgSrc}
                    alt={stat.title}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-3xl font-bold mt-4">
                  {stat.value.toLocaleString()}+
                </h3>
                <p className="text-lg font-semibold mt-2">{stat.title}</p>
                <p className="text-gray-400 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* What Our Customers Say */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-8 relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute -top-5 left-8 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-100 mb-6">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I book a ride with QuickRide?",
                answer:
                  "You can book a ride through our mobile app, website, or by calling our customer service. The easiest way is to download our app from the App Store or Google Play Store.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit/debit cards, and digital wallets. You can also add funds to your QuickRide wallet for seamless payments.",
              },
              {
                question: "How are your drivers vetted?",
                answer:
                  "All our drivers undergo a thorough background check, vehicle inspection, and training program before they can join the QuickRide platform.",
              },
              {
                question: "Can I schedule a ride in advance?",
                answer:
                  "Yes, you can schedule a ride up to 7 days in advance through our app or website.",
              },
              {
                question: "What if I leave something in the taxi?",
                answer:
                  "If you leave something in a QuickRide taxi, you can report it through our app or customer service. We'll help you get in touch with the driver to retrieve your belongings.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-6 border-b text-amber-100 pb-6 last:border-0"
              >
                <h3 className="text-xl text-white font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-5 bg-gradient-to-r from-orange-900/40 to-black  relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
                Download Our App
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-md">
                Get the full QuickRide experience with our mobile app. Book
                rides, track your driver, and manage payments all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className=" border bg-gray-200 border-white/20 rounded-xl px-6 py-3 flex items-center hover:bg-white transition-colors"
                >
                  <div className="mr-3">
                    <Download className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="bg-gray-200 border border-white/20 rounded-xl px-6 py-3 flex items-center hover:bg-white transition-colors"
                >
                  <div className="mr-3">
                    <Download className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative pt-40 w-64 h-[500px]">
                <img
                  src="./src/assets/logo.png"
                  fill
                  alt="QuickRide mobile app"
                  className="object-contain scale-200 border-1 border-white rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
