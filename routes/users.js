import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  patchUser,
} from "../controllers/users.js";

const router = express.Router();


router.get("/", getAllUsers);

router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/", deleteUser);
router.patch("/:id", patchUser);

export default router;
