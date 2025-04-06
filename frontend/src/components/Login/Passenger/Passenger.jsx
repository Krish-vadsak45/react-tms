import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PassengerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/sign-in/captain-sign-in", { replace: true });
  };
  const data = { email, password };
  const handleLoginsubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    if (!email || !password) {
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
    toast.success("Login Succesfull!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const response = await fetch(
      "http://localhost:3000/api/data/PassengerLogIn",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      setEmail("");
      setPassword("");
      toast.success("User Logged In...");
    } else {
      toast.error("Email or password is wrong !!");
    }
  };

  return (
    <div
      className="flex justify-center bg-[url('/src/assets/taxi-image.png')] bg-cover bg-center h-screen w-full items-center"
      loading="lazy"
    >
      <form
        onSubmit={handleLoginsubmit}
        className="flex flex-col gap-4 bg-white p-8 w-96 rounded-2xl shadow-lg"
      >
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Passenger Login
        </h2>
        <p className="text-sm text-gray-600 text-center max-w-[90%] mx-auto">
          Get started with our app, just log in and enjoy the experience.
        </p>

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
          Login
        </button>

        <div className="text-center text-sm justify-center flex cursor-pointer">
          Don't have an account?{" "}
          <NavLink
            to="/Sign-in/Passenger-sign-in"
            onClick={handleSignIn}
            className="relative cursor-pointer flex text-blue-700 underline "
          >
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
}
