var express = require("express");
const CourseController = require("../controllers/CourseController");

var router = express.Router();

router.get("/courses", CourseController.courseList);
router.post("/course", CourseController.courseStore);

module.exports = router;
