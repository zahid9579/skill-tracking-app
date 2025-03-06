const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    skillName: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        default: 0, // % completion (0 to 100)
        min: 0,
        max: 100
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
