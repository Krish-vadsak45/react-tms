# Taxi Management System (react-tms)

Welcome to the Taxi Management System, a comprehensive platform designed to streamline taxi operations by connecting passengers and captains efficiently. This project features a robust backend API and a dynamic React frontend, providing a seamless user experience for booking, emergency handling, feedback, and more.

---

## Backend

The backend is built with **Node.js**, **Express**, and **MySQL**, providing a RESTful API to manage data and business logic.

- **Tech Stack:** Node.js, Express, MySQL, Multer, CORS, dotenv
- **Main Entry:** `backend/app.js`
- **API Base Route:** `/api/data/`

### Installation & Running

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder with your environment variables (e.g., database credentials, PORT).
4. Start the backend server in development mode:
   ```bash
   npm run dev
   ```
5. The server will run on the port specified in `.env` or default to `5000`.

---

## Frontend

The frontend is a modern **React** application using **React Router** for navigation and **React Toastify** for notifications.

- **Tech Stack:** React, React Router DOM, React Toastify, Vite
- **Main Entry:** `frontend/src/main.jsx`
- **Routing:** Multi-page with routes for Home, About, Contact, Emergency, Feedback, Passenger Login, Captain Login, and Sign-in pages.

### Installation & Running

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to the URL provided by Vite (usually `http://localhost:3000`).

---

## Features

- **User Authentication:** Separate login and sign-in pages for passengers and captains.
- **Emergency Handling:** Dedicated emergency component for quick assistance.
- **Feedback System:** Users can submit feedback through the feedback component.
- **Contact Page:** Easy access to contact information and support.
- **Responsive UI:** Clean and user-friendly interface with header, footer, and multiple pages.

---

## Technologies Used

- **Backend:** Node.js, Express, MySQL, Multer, CORS, dotenv, Nodemon
- **Frontend:** React, React Router DOM, React Toastify, Vite
- **Others:** ESLint for code linting, various image assets for UI

---

## How to Contribute

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request with your improvements or bug fixes.

---

## Contact

For any questions or support, please reach out to the project maintainers.

---

Thank you for checking out the Taxi Management System! Drive safe and enjoy seamless taxi management.
