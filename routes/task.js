import { Router } from "express";
const router = Router();
import authenticateUser from "../middleware/authMiddleware.js";
import {
  getTaskDetails,
  deleteTask,
  updateTask,
  updateTaskStatus,
  CreateTask,
  fetchTask,
} from "../controllers/taskController.js";

// Route to create a new task
router.post("/tasks", authenticateUser, CreateTask);

// Route to fetch all tasks
router.get("/tasks", authenticateUser, fetchTask);

// PUT /tasks/:taskId
router.put("/tasks/:taskId", authenticateUser, updateTask);

// PUT route to update task status
router.put("/tasks/:taskId/status", updateTaskStatus);

// DELETE a task by ID
router.delete("/tasks/:id", authenticateUser, deleteTask);
// Route to get task details by ID
router.get("/tasks/:taskId", authenticateUser, getTaskDetails);

export default router;
