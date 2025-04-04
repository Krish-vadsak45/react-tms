import { Router } from "express";
import Emergency from "../controllers/emergency.js";
import Feedback from "../controllers/feedback.js";
import Passenger from "../controllers/passenger.js";
import Captain from "../controllers/captain.js";
import ContactUs from "../controllers/contactus.js";
import Trip from "../controllers/trip.js";

const routes = Router();

routes.route("/Emergency").post(Emergency);
routes.route("/Feedback").post(Feedback);
routes.route("/Passenger").post(Passenger);
routes.route("/Captain").post(Captain);
routes.route("/Contactus").post(ContactUs);
routes.route("/Trip").post(Trip);

console.log("Hello");

export default routes;