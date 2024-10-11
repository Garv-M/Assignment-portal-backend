const Assignment = require('../models/assignmentModel');

// Get assignments for admin
exports.getAssignments = async (req, res) => {
    const assignments = await Assignment.find({ admin: req.user._id }).populate('userId');
    res.status(200).json(assignments);
};

// Accept assignment
exports.acceptAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    
    if (assignment.admin.toString() !== req.user._id.toString()) {
        res.status(403)
        throw new Error('Not authorized');
    }

    assignment.status = 'accepted';
    await assignment.save();
    res.status(201).json('Assignment accepted');
};

// Reject assignment
exports.rejectAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    
    if (assignment.admin.toString() !== req.user._id.toString()) {
        res.status(403)
        throw new Error('Not authorized');
    }

    assignment.status = 'rejected';
    await assignment.save();
    res.send('Assignment rejected');
};
