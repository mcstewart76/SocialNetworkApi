const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: dateFormat,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
function dateFormat() {
    
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;