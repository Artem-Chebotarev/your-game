const { model, Schema } = require("mongoose");

const noteSchema = new Schema({
  text: {
    type: String,
  },
  tags: [{
    type: String,
  }],
  notebook: {
    type: Schema.Types.ObjectId,
    ref: 'Notebooks'
  },
});

const NoteModel = model('Notes', noteSchema);

module.exports = NoteModel;
