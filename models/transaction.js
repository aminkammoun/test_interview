const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: false,
  },

  children: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("trasaction", userSchema);
