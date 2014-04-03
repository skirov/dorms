'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Student Schema
 */
var StudentSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		required: [true, 'Полето "Име" е задължително.']
	},
	lastName: {
		type: String,
		trim: true,
		required: [true, 'Полето "Фамилия" е задължително.']
	},
	dorm: {
		type: String,
		trim: true,
		match: [/^\d{1,2}[абвгдАБВГД]{0,1}$/g, 'Полето "Блок" трябва да е в правилен формат.'],
		required: [true, 'Полето "Фамилия" е задължително.']
	},
	room: {
		type: String,
		trim: true,
		match: [/^\d{1,4}[абвгдАБВГД]{0,1}$/g, 'Полето "Стая" трябва да е в правилен формат.'],
		required: [true, 'Полето "Стая" е задължително.']
	},
	creationDate: {
		type: Date
	}
});

/**
 * Length fields validations
 */
StudentSchema.path('firstName').validate(function (firstName) {
	return firstName.length >= 1 && firstName.length <= 50;
}, 'Полето "Име" трябва да е с дължина между 1 и 50 символа.');

StudentSchema.path('lastName').validate(function (lastName) {
	return lastName.length >= 1 && lastName.length <= 50;
}, 'Полето "Фамилия" трябва да е с дължина между 1 и 50 символа.');

StudentSchema.path('dorm').validate(function (dorm) {
	return dorm.length >= 1 && dorm.length <= 5;
}, 'Полето "Блок" трябва да е с дължина между 1 и 5 символа.');

StudentSchema.path('room').validate(function (room) {
	return room.length >= 1 && room.length <= 5;
}, 'Полето "Стая" трябва да е с дължина между 1 и 5 символа.');

mongoose.model('Student', StudentSchema);
