import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Passengersignin() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Login/passenger", { replace: true });
  };

  return (
    <div className="flex justify-center bg-[url('/src/assets/taxi-image.png')] bg-cover bg-center h-screen w-full items-center">
      <form className="flex flex-col gap-4 bg-white p-8 w-96 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          Passenger Sign In
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

        <div className="flex flex-col">
          <label className="font-semibold text-gray-800">
            Confirm Password
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <input
              type={showPassword2 ? "text" : "password"}
              className="ml-2 flex-grow border-none focus:outline-none [&::-ms-reveal]:hidden [&::-webkit-contacts-auto-fill-button]:hidden"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // autoComplete="new-password"
            />
            <button
              type="button"
              className="ml-2 text-gray-500 focus:outline-none cursor-pointer"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              <img
                src={
                  showPassword2
                    ? "../src/assets/eye-open.svg"
                    : "../src/assets/eye-close.svg"
                }
                alt={showPassword2 ? "Hide Password" : "Show Password"}
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

        <button
          className="mt-4 bg-black text-white font-medium rounded-lg py-2 hover:bg-gray-800 cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          Sign In
        </button>

        <div className="text-center text-sm justify-center flex cursor-pointer">
          Already have an account?{" "}
          <NavLink
            to="/Login/passenger"
            onClick={handleLogin}
            className="relative cursor-pointer flex text-blue-700 underline "
          >
            Login
          </NavLink>
        </div>

        <p className="text-center text-sm text-gray-500">Or With</p>

        <div className="flex gap-4">
          <button
            className="flex-1 border border-gray-300 rounded-lg py-2 hover:border-blue-500 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            Google
          </button>
          <button
            className="flex-1 border border-gray-300 rounded-lg py-2 hover:border-blue-500 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
