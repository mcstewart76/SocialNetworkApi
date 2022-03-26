const { Schema, Types , model } = require('mongoose');
const moment = require('moment');

//Schema to Reactions
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

function dateFormat(createdAt) {
  return moment(createdAt).format('MMM Do, YYYY [,] hh:mm a')

}

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;