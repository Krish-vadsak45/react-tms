import React, { useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Send,
  Phone,
  Shield,
  User,
  Clock,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Emergency = () => {
  const [currentlocation, setCurrentlocation] = useState("");
  const [destinationlocation, setDestinationlocation] = useState("");
  const [description, setDescription] = useState("");

  const handleEmergency = async (e) => {
    e.preventDefault();

    if (!location || !description) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Prepare data
    const emergencyData = { location, description };

    try {
      // Send data to backend
      const response = await fetch("http://localhost:3000/api/data/Emergency", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emergencyData),
      });

      if (response.ok) {
        toast.success("Emergency Alert Sent! We will help you soon.", {
          position: "top-right",
          autoClose: 3000,
        });
        setLocation("");
        setDescription("");
      } else {
        toast.error(data.error || "Failed to send emergency alert.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("❌ Error sending emergency data:", error);
      toast.error("Network error. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <ToastContainer />
      <div className="pt-24 px-4 max-w-7xl mx-auto pb-10">
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-full bg-red-500/20 mb-4">
            <AlertTriangle className="h-12 w-12 text-red-500 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Emergency Assistance</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            If you're experiencing an emergency during your ride, use this form
            to get immediate help. Our support team will be notified instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">
              Request Emergency Help
            </h2>
            <form onSubmit={handleEmergency} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={currentlocation}
                    onChange={(e) => setCurrentlocation(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your current location"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Destination Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={destinationlocation}
                    onChange={(e) => setDestinationlocation(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your destination location"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Situation Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full max-h-[240px] min-h-[100px] bg-gray-700/50 border border-gray-600 rounded-lg py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Briefly describe your emergency situation"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="h-5 w-5" />
                Send Emergency Alert
              </button>
            </form>
          </div>

          {/* Emergency Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Emergency Hotline
                  </h3>
                  <p className="text-gray-400">
                    Our 24/7 emergency support line:
                  </p>
                  <p className="text-2xl font-bold text-red-500">
                    1-800-QUICK-RIDE
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <Shield className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  Immediate Response
                </h3>
                <p className="text-gray-400">
                  Our emergency team responds within 2 minutes
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <User className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  Dedicated Support
                </h3>
                <p className="text-gray-400">
                  Trained professionals available 24/7
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                <Clock className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  Real-time Tracking
                </h3>
                <p className="text-gray-400">
                  Emergency services track your location instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
