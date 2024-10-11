const express = require("express");
const { registerUser, loginUser, uploadAssignment, getAdmins } = require("../Controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', validateToken, uploadAssignment);
router.get('/admins', getAdmins);

module.exports = router;