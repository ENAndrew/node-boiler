const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//FORMAT Schema to match whatever test data you'd like.
const UsersSchema = new Schema({
    name: String,
    company: String,
    email: String,
    password: String,
    password2: String
  },
  {
      timestamps: true
  }
);

module.exports = mongoose.model('users', UsersSchema);

