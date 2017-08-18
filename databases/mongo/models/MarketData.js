var mongoose = require('mongoose');

var marketData_schema = mongoose.Schema({
	SecurityName: { 
		type: String,
		required: true
	},
	RefDate: {
		type: Date,
		default: Date.now,
		required: true
	},
	Value: {
		type: Number,
		required: true
	}

}, {collection : 'MarketData'});


var MarketData = module.exports = mongoose.model('CDI', marketData_schema);

module.exports.getCDIs = function(callback, limit){
	MarketData.find(callback).limit(limit);
}