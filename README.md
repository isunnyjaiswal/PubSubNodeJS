# PubSubNodeJS

Following up on my last project(https://github.com/isunnyjaiswal/RandomQuoteGenerator) of serving Random Quotes using NodeJS with a MongoDB, this repository uses the randomQuotes and serves on the publisher and subscriber model.

The eventemitter.js files emits the event 'givemerandomquote' and when you run the events.js file, it receives the emit and catches the random quote as an argument.

In this project too, you will be required to import Mongoose and Mongoose Random.

<b>Mongoose:</b> Mongoose is what we will use to interact with a MongoDB(Database) instance. 
npm install mongoose --save

<b>Mongoose Random:</b> Used to choose the random document from the chosen mongoose collection. 
npm install mongoose-random 

Below are some details, change as per your need: 
Mongo Database Name used: quoteGeneratorDB 
Collection Name: quotes 
Collection structure: quote(String), author(String), quotetype(enum['love', 'inspirational', 'patriotic'])
