import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { deleteNotifications, getNotifications } from "../controllers/notification.controller.js";
const notificationRouter = express.Router();


notificationRouter.get("/", protectedRoute,getNotifications);
notificationRouter.delete("/", protectedRoute,deleteNotifications);





export default notificationRouter;
