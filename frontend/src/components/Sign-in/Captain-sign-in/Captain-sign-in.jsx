import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Captainsignin() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [carNo, setCarNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login/Captain", { replace: true });
  };

  const handleSigninsubmit = async (e) => {
    e.preventDefault();
    console.log({ username, mobile, carNo, email, password });
    const indianMobileRegex = /^[6-9]\d{9}$/;
    const carRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/i;
    if (!indianMobileRegex.test(mobile)) {
      toast.error("Please enter a valid mobile number.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!carRegex.test(carNo)) {
      toast.error("Please enter a valid car number.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/data/Captain", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            username,
            mobile_no: mobile,
            car_no: carNo,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message || "Sign-up Successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Optional: Redirect to login after sign-up
          setTimeout(() => {
            navigate("/Login/Captain");
          }, 3000);
        } else {
          toast.error(data.error || "Sign-up failed. Try again.");
        }
      } catch (err) {
        console.error("Sign-up error:", err);
        toast.error("Something went wrong. Please try again.");
      }
    }
    if (!email || !password || !username || !mobile || !carNo) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("Sign-in Succesfull!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    if (response.ok) {
      setEmail("");
      setPassword("");
      setUsername("");
      setMobile("");
      toast.success("User Registered sucessfully...");
    } else {
      toast.error("all fields are required!!!");
    }
  };

  return (
    <div
      className="flex justify-center bg-[url('/src/assets/taxi-image.png')] bg-cover bg-center h-screen w-full items-center"
      loading="lazy"
    >
      <form
        onSubmit={handleSigninsubmit}
        className="flex flex-col gap-4 bg-white p-8 w-96 rounded-2xl shadow-lg"
      >
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Captain Sign In
        </h2>
        <p className="text-sm text-gray-600 text-center max-w-[90%] mx-auto">
          Get started with our app, just log in and enjoy the experience.
        </p>
        <div>
          <label className="font-semibold text-gray-800">Username</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type="text"
              className="ml-2 flex-grow border-none focus:outline-none"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="font-semibold text-gray-800">Mobile No.</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type="tel"
              className="ml-2 flex-grow border-none focus:outline-none"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-800">Car No.</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type="text"
              className="ml-2 flex-grow border-none focus:outline-none"
              placeholder="Enter your Email"
              value={carNo}
              onChange={(e) => setCarNo(e.target.value.toUpperCase())}
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-800">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type="email"
              className="ml-2 flex-grow border-none focus:outline-none"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-800">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              className="ml-2 flex-grow border-none focus:outline-none [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              // autoComplete="new-password"
            />
            <button
              type="button"
              className="ml-2 text-gray-500 focus:outline-none cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                src={
                  showPassword
                    ? "../src/assets/eye-open.svg"
                    : "../src/assets/eye-close.svg"
                }
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <span className="text-blue-500 cursor-pointer">Forgot password?</span>
        </div>

        <button className="mt-4 bg-black text-white font-medium rounded-lg py-2 hover:bg-gray-800 cursor-pointer">
          Sign In
        </button>

        <div className="text-center text-sm justify-center flex cursor-pointer">
          Already have an account?{" "}
          <NavLink
            to="/Login/Captain"
            onClick={handleLogin}
            className="relative cursor-pointer flex text-blue-700 underline "
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
}
