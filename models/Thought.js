const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const userSchema = require('./User');

const thoughtSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            max_length: 50,
        },
        thoughtText: {
            type: String,
            required: true,
            max_length: 500,
        },
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            max_length: 50,
        },
        reactions: {
            type: Array,
        },
        __v: {
            type: Number,
        },
        reactionCount: {
            type: Number,
        },
    }
)

const Thought = model('student', thoughtSchema);

module.exports = Thought;