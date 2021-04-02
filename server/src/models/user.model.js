const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notebooks: [{
    type: Schema.Types.ObjectId,
    ref: 'Notebooks'
  }],
  // users: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Users',
  // },
});

const UserModel = model('Users', userSchema);

module.exports = UserModel;
