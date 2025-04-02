import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./App.jsx";
// import Safety from "./components/Safety/Safety.jsx";
// import Blogs from "./components/Blogs/Blogs.jsx";
import Emergency from "./components/Emergency/Emergency.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import PassengerLogin from "./components/Login/Passenger/Passenger.jsx";
import CaptainLogin from "./components/Login/Captain/Captain.jsx";
import Captainsignin from "./components/Sign-in/Captain-sign-in/Captain-sign-in.jsx";
import Pasengersignin from "./components/Sign-in/Passenger-sign-in/Passenger-sign-in.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="Safety" element={<Safety />} />
      <Route path="Blogs" element={<Blogs />} /> */}
      <Route path="Emergency" element={<Emergency />} />
      <Route path="Feedback" element={<Feedback />} />
      <Route path="/login/passenger" element={<PassengerLogin />} />
      <Route path="/login/captain" element={<CaptainLogin />} />
      <Route path="/Sign-in/Captain-sign-in" element={<Captainsignin />} />
      <Route path="/Sign-in/Passenger-sign-in" element={<Pasengersignin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
);
