import User from "../models/user.model.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      await User.create({
        clerkId: id,
        firstName,
        lastName,
        imageUrl,
      });
    }

    res.status(200).json({ success: true, message: "Success" });
  } catch (error) {
    console.error(`Error in auth controller`, error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
