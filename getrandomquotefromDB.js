var mongoose = require('mongoose');
var Task = require('./quoteModel.js');
var random = require('mongoose-random');
Quote = mongoose.model('Quotes');
mongoose.connect('mongodb://localhost:27017/quoteGeneratorDB');

exports.random_quote = function(callback){
	Quote.findRandom().limit(1).exec(function(err, quote){
		callback(err, quote);
		
	});
	
}
