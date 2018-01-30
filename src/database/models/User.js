import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  userKey: String,
  stateName: String,
  mode: String,
  step: Number,
});

User.statics.findUserKey = function (userKey) {
  return this.findOne({ userKey }).exec();
};

User.statics.registerUserKey = function (userKey) {
  const user = new this({
    userKey,
    stateName: 'INIT',
    mode: 'MODE_NORMAL',
    step: 0,
  });

  return user.save();
};

User.methods.updateState = function (stateName) {
  this.update({
    $set: {
      stateName,
    },
  }).exec();
};


export default mongoose.model('User', User);
