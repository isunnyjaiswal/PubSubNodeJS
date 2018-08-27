const EventEmitter = require('events');
var con = require('./getrandomquotefromDB.js');

class PubSub extends EventEmitter{
 emitterfunc(){
	//event.call(this);
	const that = this;
	
	
	con.random_quote(function(err, quote){
		//console.log("In eventemitter: " + quote[0].quote);
		that.emit('givemerandomquote', quote);
	});

}
}

module.exports = PubSub;