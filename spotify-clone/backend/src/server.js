import express from "express";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import { connectToDb } from "../lib/db.js";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectToDb();
});
