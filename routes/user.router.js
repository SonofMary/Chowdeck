const express = require("express")
const { validateCreatedUser } = require("../middleware/user.middleware")
const { registerUser } = require("../controller/user.controller")

const userRouter = express.Router()

userRouter.route("/createUser").get(validateCreatedUser, registerUser)









module.exports = userRouter

