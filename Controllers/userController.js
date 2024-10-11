const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Assignment = require('../models/assignmentModel');
const asyncHandler = require("express-async-handler");

// Register user
exports.registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        res.status(404);
        throw new Error("All fields are mandatory");
    }

    let user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error("User already Registered");
    }

    user = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role
    });

    console.log("User Created", user);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("User data is not valid");
    }
});

// Login user
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401);
        throw new Error("Email or password is not valid");
    }

    const token = jwt.sign({
        userId: user._id
    },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
    );
    res.status(200).json({ token });
});

// Upload assignment
exports.uploadAssignment = asyncHandler(async (req, res) => {
    const { task, adminId } = req.body;
    if(!task || !adminId){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const assignment = await new Assignment.create({
        userId: req.user._id,
        task,
        admin: adminId,
    });

    res.status(201).json(assignment);
});

// Get admins
exports.getAdmins = asyncHandler(async (req, res) => {
    const admins = await User.find({ role: 'admin' });
    res.json(admins);
});
