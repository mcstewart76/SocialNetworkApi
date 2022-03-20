const { Schema, model } = require('mongoose');


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
    reactions: {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
    }
    
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

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;