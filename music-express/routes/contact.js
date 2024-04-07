var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/music');
const db = mongoose.connection;

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

const contactModel = mongoose.model('Contact', contactSchema);

// GET contact info
router.get("/musicProject", async (req, res) =>{
  try {
    const contact = await contactModel.find({});
    res.json(contact);
  } catch (e) {
    res.status(500).send(e);
  }
});
// POST new contact
router.post("/musicProject", async (req, res) =>{

  const {desc} = req.body;

  const contact = new contactModel({desc});
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (e) {
    res.status(500).send(e);
  }
});
// PUT updated contact
router.put("/musicProject/:id", async (req, res) => {
  const { id } = req.params;
  const { desc } = req.body;
  try {
  const contactUpdate = await contactModel.findByIdAndUpdate(
  id,
  { desc },
  { new: true }
  );
  if (contactUpdate) {
  res.json(contactUpdate);
  } else {
  res.status(404).send('Item not found');
  }
  } catch (error) {
  res.status(500).send(error);
  }
  });
  // DELETE specific contact
  router.delete("/musicProject/:id", async (req, res) => {
    const { id } = req.params;
    try {
    const deletedContact = await contactModel.findByIdAndDelete(id);
    if (deletedContact) {
    res.status(204).send(); // No content to send back
    } else {
    res.status(404).send('Item not found');
    }
    } catch (error) {
    res.status(500).send(error);
    }
    });

module.exports = router;
