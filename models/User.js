const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            max_length: 50,
        },
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            max_length: 50,
        },
        __v: {
            type: Number,
        },
        friendCount: {
            type: Number,
        },
    }
)

const User = model('student', userSchema);

module.exports = User;