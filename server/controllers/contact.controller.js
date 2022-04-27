const { findByIdAndUpdate } = require("../models/Contact.model");
const Contact = require("../models/Contact.model");

module.exports.contactController = {
  getContacts: async (req, res) => {
    try {
      const allContacts = await Contact.find();
      res.json(allContacts);
    } catch (error) {
      res.json({ error });
    }
  },

  addContact: async (req, res) => {
    try {
      const { name, phone } = req.body;
      const newContact = await Contact.create({
        name,
        phone,
      });
      res.json(newContact);
    } catch (error) {
      res.json({ error });
    }
  },

  editContact: async (req, res) => {
    try {
      const { id } = req.params;
      await Contact.findByIdAndUpdate(id, {
        ...req.body,
      });
      const editedContact = await Contact.findById(id);
      res.json(editedContact);
    } catch (error) {
      res.json({ error });
    }
  },

  deleteContact: async (req, res) => {
    try {
      const { id } = req.params;
      await Contact.findByIdAndDelete(id);
      res.json("OK");
    } catch (error) {
      res.json({ error });
    }
  },
};
