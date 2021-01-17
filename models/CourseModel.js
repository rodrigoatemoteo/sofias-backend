var mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
	title: {type: String, required: true},
	activities: [{
		type: {type: String, required: true},
		activity_name: {type: String, required: true},
		link: {type: String, required: false, default: ""},
		description: {type: String, required: true},
	}],
	exercise: {
		title : {type: String, required: true},
		description: {type: String, required: true},
		exercises: [{
			title: {type: String, required: true},
			description: {type: String, required: true},
			alternatives: [],
			correct: {type: Number, required: true}
		}]
	}
}, {timestamps: true});

module.exports = mongoose.model("Course", CourseSchema);

