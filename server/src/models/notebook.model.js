const { model, Schema } = require("mongoose");

const notebookSchema = new Schema({
  title: {
    type: String,
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Notes',
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  }
});

const NotebookModel = model('Notebooks', notebookSchema);

module.exports = NotebookModel;
