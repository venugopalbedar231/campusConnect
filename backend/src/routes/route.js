import {Router} from 'express';
import * as Controller from "../controllers/controller.js";

const appRouter = Router();

//user
// appRouter.post("/users", Controller.register)
appRouter.get("/users", Controller.getUser)
appRouter.post("/notices", Controller.createNotice)
appRouter.get("/notices", Controller.getNotices)
appRouter.get("/events", Controller.getEvents)
appRouter.post("/events", Controller.createEvent)
appRouter.get("/events/:id", Controller.getEventById)
appRouter.get("/notices/:id", Controller.getNoticeById)
appRouter.post("/users/register", Controller.register)

export default appRouter;