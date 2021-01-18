const CourseModel = require("../models/CourseModel");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

exports.courseList = [
	function (req, res) {
		try {
			CourseModel.find({}, function(err, courses) {
				if(courses.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", courses);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];

exports.courseStore = [
	auth,
	(req, res) => {
		try {
			const errors = validationResult(req);
			var course = new CourseModel(
				{ title: req.body.title,
					activities: req.body.activities,
					exercise: req.body.exercise,
				});

			if (!errors.isEmpty()) {
				return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
			}
			else {
				//Save book.
				course.save(function (err) {
					if (err) { return apiResponse.ErrorResponse(res, err); }
					let courseData = {
						_id: course._id,
						title: course.title,
						activities: course.activities,
						exercise: course.exercise
					};
					return apiResponse.successResponseWithData(res,"Book add Success.", courseData);
				});
			}
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
