'use strict';

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    pitiontName: { type: String, required: true },
    doctorName: { type: String, required: true },
    day: { type: String, required: true }
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;