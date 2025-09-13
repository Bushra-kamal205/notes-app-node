const express = require("express");
const router = express.Router();
const { createNotes, getNotes, getsingleNotes, deleteNotes, updateNotes } = require("../controllers/noteControl");

router.post("/create" , createNotes)
router.get("/notes" , getNotes)
router.get("/notes/:id", getsingleNotes)
router.delete("/notes/:id",deleteNotes)
router.patch("/notes/:id", updateNotes)
module.exports = router;