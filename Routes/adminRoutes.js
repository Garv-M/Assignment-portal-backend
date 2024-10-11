const express = require('express');
const { getAssignments, acceptAssignment, rejectAssignment } = require('../Controllers/adminController');
const validateToken = require('../middleware/validateTokenHandler');
const { registerUser, loginUser } = require('../Controllers/userController');
const router = express.Router();

router.get('/assignments', validateToken, getAssignments);
router.post('/assignments/:id/accept',validateToken, acceptAssignment);
router.post('/assignments/:id/reject', validateToken, rejectAssignment);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
