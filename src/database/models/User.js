import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  userKey: String,
  status: String,
});

User.statics.findUserKey = function (userKey) {
  return this.findOne({ userKey }).exec();
};

User.statics.registerUserKey = function (userKey) {
  const user = new this({
    userKey,
    status: 'INIT',
  });

  return user.save();
};


export default mongoose.model('User', User);
