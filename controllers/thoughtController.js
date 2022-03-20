const { User, Thought, Reaction } = require('../models');

module.exports = {

// get all thoughts
getThoughts(req, res) {
    Thought.find()
      .then(async (thoughts) => {
        
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
// get single thought by id

// post thought

//put thought to update by id

//delete thought remove by id



//api/thoughts/:thoughtId/reactions

//post to create reaction stored in thoughts reaction array

//delete to remove a reaction by the reactions reactionId


}
