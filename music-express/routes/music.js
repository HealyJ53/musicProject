var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/music');
const db = mongoose.connection;

const musicSchema = new mongoose.Schema({
  songName: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const musicModel = mongoose.model('Music', musicSchema);

// GET music info
router.get("/musicProject", async (req, res) =>{
  try {
    const music = await musicModel.find({});
    res.json(music);
  } catch (e) {
    res.status(500).send(e);
  }
});
// POST new music
router.post("/musicProject", async (req, res) =>{

  const {desc} = req.body;

  const song = new musicModel({desc});
  try {
    const newSong = await song.save();
    res.status(201).json(newSong);
  } catch (e) {
    res.status(500).send(e);
  }
});
// PUT updated music
router.put("/musicProject/:id", async (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;
  try {
  const musicUpdate = await musicModel.findByIdAndUpdate(
  id,
  { desc },
  { new: true }
  );
  if (musicUpdate) {
  res.json(musicUpdate);
  } else {
  res.status(404).send('Item not found');
  }
  } catch (error) {
  res.status(500).send(error);
  }
  });
  // DELETE specific music
  router.delete("/musicProject/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const deletedSong = await musicModel.findByIdAndDelete(id);
    if (deletedSong) {
    res.status(204).send(); // No content to send back
    } else {
    res.status(404).send('Item not found');
    }
    } catch (error) {
    res.status(500).send(error);
    }
    });

module.exports = router;
