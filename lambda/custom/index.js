'use strict';
var Alexa = require("alexa-sdk");

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build


exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('tellMeNumber');
    },
    'tellMeNumber': function () {
        var numberSlotValue = this.event.request.intent.slots.number.value;
        this.emit(':tell', "Your number is " + numberSlotValue);
    },
    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },
    'AMAZON.StopIntent' : function() {
        this.emit(':tell', "GoodByee!!");
    },
    'AMAZON.HelpIntent' : function() {
        this.emit(':tell', "Please provide speak out any number");
    },
    'AMAZON.CancelIntent' : function() {
        this.emit(':tell', "Byee");
    },
    'Unhandled' : function() {
        this.emit(':tell', "Sorry, I didn't get that but you can try providing number to alexa");
    }
};
