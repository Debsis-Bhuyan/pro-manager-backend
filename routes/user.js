import { Router } from "express";
import authenticateUser from "../middleware/authMiddleware.js";

import {
  Login,
  register,
  getUser,
  fetchUserId,
  profile,
} from "../controllers/userController.js";

const router = Router();

// Register a new user
router.post("/users/register", register);

// Login
router.post("/users/login", Login);

router.put("/users/profile", authenticateUser, profile);

router.get("/users/:id", authenticateUser, getUser);

// Route to fetch userId from the authenticated user
router.get("/users/me", authenticateUser, fetchUserId);

export default router;
