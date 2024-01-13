const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);

module.exports = router;
