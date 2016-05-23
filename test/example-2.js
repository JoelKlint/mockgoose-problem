var mocha = require('mocha');
var Model = require('../models/test');
var mockgoose = require('mockgoose');
var mongoose = require('mongoose');

describe('mockgoose-example', function(done) {
	before(function(done) {
		mockgoose(mongoose).then(function() {
			mongoose.connect('test-db');
		})
		// Create base model
		Model.create({ name: 'test' })
		.then(function() {
			done();
		});
	})

	// This does not work
	after(function(done) {
		mockgoose.reset(function() {
			done();
		});
	})

	// This works
	// after(function(done) {
	// 	Model.remove({}).then(function() {
	// 		done();
	// 	});
	// })

	it('should not allow duplicates', function(done) {
		Model.create({ name: 'test' })
		.then(function(model) {
			// Duplicate model was created
			done();
		})
		.catch(function(err) {
			// Duplicate model was not created
			done(err)
		})
	})
})
