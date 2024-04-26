
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const measureSchema = new Schema(
  {
    value: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id
        delete ret.__v
      }
    }
  }
);

const Measure = mongoose.model("Measure", measureSchema);

module.exports = Measure;
