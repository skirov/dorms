'use strict';

var mongoose = require('mongoose'),
    Student = mongoose.model('Student');

/**
 * Processing data from FIRST step
 */
exports.stepOne = function(req, res) {
	var studentInfo = req.body;
	var newStudent = new Student(studentInfo);

	newStudent.save(function(error, data) {
		if (!error) {
			res.send(data);
		} else {
			var errors = error.errors;
			res.send(400, errors);
		}
	});
};