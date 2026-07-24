import express from 'express';
import morgan from  'morgan';
import Router from './routes/route.js';
import cookieParser from 'cookie-parser';
// import sessionModel from './models/session.model.js';
import cors from 'cors';


const app = express ();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://termiconnect.vercel.app",
];

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (e.g., Postman)
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", Router)

export default app;