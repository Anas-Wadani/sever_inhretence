const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  email: { type: String, required: true },
  result: {
    Qaybta: { type: mongoose.Schema.Types.Mixed },
    references: { type: mongoose.Schema.Types.Mixed },  // Accept any object
    LacagtaGuud: Number,
    Jinsi: String,
  },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Result', resultSchema);
