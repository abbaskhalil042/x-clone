import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { deleteNotification, deleteNotifications, getNotifications } from "../controllers/notification.controller.js";
const notificationRouter = express.Router();


notificationRouter.get("/", protectedRoute,getNotifications);
notificationRouter.delete("/", protectedRoute,deleteNotifications);
//*optional
notificationRouter.delete("/:id", protectedRoute,deleteNotification);





export default notificationRouter;
