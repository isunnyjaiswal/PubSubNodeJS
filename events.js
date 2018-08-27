
const PubSub = require('./eventemitter.js');

//create a new instance of eventemitter class
const simplePubSub  = new PubSub();

//associating a receiver with the event
simplePubSub.on('givemerandomquote', (args) =>{
	console.log(`event called and the random quote is: ${args[0].quote}` );	
});

//calling the event
simplePubSub.emitterfunc();
