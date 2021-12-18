const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 15,
    },
    lastName: {
        type: String,
        max: 15,
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999,
    },
    type: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    }
},{timestamps: true});


useSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", useSchema);
