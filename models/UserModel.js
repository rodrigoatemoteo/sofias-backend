var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	birthday_date: {type: String, required: true},
	location: {type: String, required: true},
	topic: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);