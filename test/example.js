var mocha = require('mocha');
var Model = require('../models/test');
var mockgoose = require('mockgoose');
var mongoose = require('mongoose');
var expect = require('chai').expect;

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
		Model.create({ name: 'test' }, function(err, model) {
			expect(err).to.exist;
			done();
		})
	})
})
