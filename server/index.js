//require("dotenv").config();
import express from "express";
import cors from  "cors";
import userRoutes from "./routes/users.js";
import msgRoutes from "./routes/message.js";
import groupRoutes from "./routes/groupRoutes.js";
import authRoutes from "./routes/auth.js";


const app = express();
// database connection

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/message", msgRoutes);
app.use("/api/group", groupRoutes);

const port = process.env.PORT || 6767;
app.listen(6767, console.log(`Listening on port ${port}...`));
