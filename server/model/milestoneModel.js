const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema({
    skillId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dateCompleted: {
        type: Date,
        default: null
    }
});

const Milestone = mongoose.model("Milestone", milestoneSchema);
module.exports = Milestone;
