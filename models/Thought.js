const { Schema, model } = require('mongoose');


//reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        
      },
    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Schema to create Thought model
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