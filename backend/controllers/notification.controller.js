import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    const notification = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImage",
    });

    await Notification.updateMany({ to: userId }, { $set: { seen: true } });

    res.status(200).json({msg:"success",notification});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    await Notification.deleteMany({ to: userId });

    res.status(200).json({ msg: "notifications deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
