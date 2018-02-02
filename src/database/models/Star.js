import mongoose from 'mongoose';

const { Schema } = mongoose;

const Star = new Schema({
  starId: Number,
  question: {
    type: String,
    default: null,
  },
  answer: {
    type: [String],
    default: null,
  },
  prevAnswer: {
    type: [String],
    default: null,
  },
  msgType: String,
});

Star.statics.findStarId = function (starId) {
  return this.findOne({ starId }).exec();
};

Star.statics.insertData = function ({ starId, question, answer, msgType }) {
  const star = new this({
    starId,
    question,
    answer,
    msgType,
  });

  return star.save();
};

Star.methods.updateStatus = function (status) {
  this.update({
    $set: {
      status,
    },
  }).exec();
};


export default mongoose.model('Star', Star);
