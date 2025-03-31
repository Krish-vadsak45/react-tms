import { useState } from "react";

export default function PassengerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center bg-[url('./src/assets/taxi-image.png')] loding:lazy bg-cover bg-center bg-repeat h-screen w-full">
      <form className="flex flex-col gap-4 bg-white p-8 w-96 rounded-2xl shadow-md m-32">
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Passenger Login
          </h2>
          <span class="m-0 text-[0.85rem] max-w-[90%] py-3 text-center text-gray-950">
            Get started with our app, just start section and enjoy experience.
          </span>
          <label className="font-semibold text-gray-800">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:border-blue-500">
            <svg
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="M30.853 13.87A15 15 0 0 0 .124 17.952a15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455z" />
              </g>
            </svg>
            <input
              type="text"
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
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.477 21.547-48 48-48h288c26.453 0 48 21.523 48 48v224c0 26.477-21.547 48-48 48z" />
            </svg>
            <input
              type="password"
              className="ml-2 flex-grow border-none focus:outline-none"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-700">Remember me</label>
          </div>
          <span className="text-sm text-blue-500 cursor-pointer">
            Forgot password?
          </span>
        </div>

        <button className="mt-4 bg-black text-white font-medium rounded-lg py-2 hover:bg-gray-800 cursor-pointer">
          Sign In
        </button>

        <p className="text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </p>

        <p className="text-center text-sm text-gray-500">Or With</p>

        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:border-blue-500 cursor-pointer">
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:border-blue-500 cursor-pointer">
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}
