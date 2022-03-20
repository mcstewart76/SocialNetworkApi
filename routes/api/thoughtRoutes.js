const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtId/reactions
//post to create a reaction stored in single thoughts reactions array
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
//delete to pull and remove reaction by the reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);



module.exports = router;
