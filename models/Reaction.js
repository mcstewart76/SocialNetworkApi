const { Schema, model } = require('mongoose');


// Schema to create Reaction model
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

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;