var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
	name: {
		type: String,
		required: true,
		index: { unique: true }
	}
});

module.exports = mongoose.model('Test', testSchema);
