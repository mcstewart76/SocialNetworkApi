const { Schema, model } = require('mongoose');


// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ObjectId
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
        get: dateFormat,
      },
    
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;