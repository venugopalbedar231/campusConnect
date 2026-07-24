# Campus Connect

Campus Connect is a full-stack MERN application built to simplify the way students access campus notices and events. It provides a clean and responsive dashboard where users can browse announcements, upcoming events, and view detailed information without unnecessary clutter.

The application consumes REST APIs built using Express.js and MongoDB, with React handling the frontend. It supports infinite scrolling for a seamless browsing experience and fetches real-time data directly from the backend.

---

## Features

### Notice Feed
- View all campus notices
- Displays title, category, and posting date
- Infinite scrolling for smooth navigation
- Real-time data fetched from backend

### Event Feed
- View upcoming campus events
- Displays venue, category, organizer, and event dates
- Infinite scrolling
- Responsive event cards

### Detail Pages
- Individual pages for notices
- Individual pages for events
- URL-based routing using React Router

### Search & Filtering
- Keyword-based search
- Category filtering
- Filters work together for improved discoverability

### Responsive Design
- Mobile-friendly
- Tablet support
- Desktop optimized

### Loading & Error Handling
- Loading indicators while fetching data
- Friendly error messages when requests fail

---

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Bootstrap / CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```
Campus-Connect
│
├── Frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── api
│   └── App.jsx
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/campus-connect.git
```

---

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`

```
VITE_BACKEND_URL=https://termiconnect.onrender.com/api
```

Run frontend

```bash
npm run dev
```

---

## API Endpoints

### Notices

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /notices | Fetch all notices |
| GET | /notices/:id | Fetch single notice |

---

### Events

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /events | Fetch all events |
| GET | /events/:id | Fetch single event |

---

## Screens

- Home Page
- Notice Feed
- Notice Details
- Event Feed
- Event Details

---

## Key Highlights

- RESTful API architecture
- Infinite scrolling implementation
- Responsive user interface
- Real-time backend integration
- Clean component-based React architecture
- Modular Express backend
- MongoDB database using Mongoose

---

## Future Improvements

- User Authentication (JWT)
- Admin Dashboard
- Notice Creation Panel
- Event Registration
- Email Notifications
- Dark Mode
- Push Notifications
- Image Upload Support

---

## Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

---

## Author

**Venugopal Bedar**

Mathematics & Computing

Indian Institute of Technology Kharagpur
