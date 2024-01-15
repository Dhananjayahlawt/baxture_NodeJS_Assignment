const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");
const { userMiddleware } = require("../middlewares");

router.get("/", UserController.getAllUsers);
router.get("/:id", userMiddleware.isValidUUID, UserController.getUserById);
router.post("/", userMiddleware.validateCreateUser, UserController.createUser);
router.put("/:id", userMiddleware.isValidUUID, UserController.updateUser);
router.delete("/:id", userMiddleware.isValidUUID, UserController.deleteUser);

module.exports = router;
