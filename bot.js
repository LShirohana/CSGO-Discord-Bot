
var logger = require("winston");
var Discord = require('discord.io');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize : true
});
logger.level = 'debug';

var auth = require("./auth.json");


var bot = new Discord.Client({
    autorun: true,
    token: "insert your token here." 
});

bot.on("ready", function (rawEvent) {
    logger.info("Connected!");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");

});

bot.on('any', function(e) {
    if (e.t === 'MESSAGE_UPDATE') {
		
    }
});
// above is an example of catching reactions, needs work

bot.on("message", function (user, userID, channelID, message, rawEvent) 
{
	if (user != "BigDonit") {
	/*
	if (user != "BigDonit") {
	bot.sendMessage({ 
                to : channelID,
                message : user + " " + userID 
            }
			
			
			)
	}
	*/
	
	var lowd = message.toLowerCase();
	
	if (lowd.substring(0, 8) == "im sorry") {
		bot.sendMessage({ 
                to : channelID,
                message : "you gotta apologize"
            });
	}
	
	if (lowd.substring(0, 9) == "i'm sorry") {
		bot.sendMessage({ 
                to : channelID,
                message : "you gotta apologize"
            });
	}
	
	if (lowd.substring(0, 19) == "you gotta apologize") {
		bot.sendMessage({ 
                to : channelID,
                message : "I'm sorry."
            });
	}
	
    if (message.substring(0, 1) == "!") {
        var arguments = message.substring(1).split(" ");
        var command = arguments[0];
        arguments = arguments.splice(1);

		
		///
        if (command == "jake") {
			bot.sendMessage({ 
                to : channelID,
                message : "<:jakehead:259156188887777292>  <:hatson:259157685469970433>"
            },
			function() {
            bot.sendMessage({ 
                to : channelID,
                message : "<:jakebody:259159049248047104>"
				});
           });
        }
		///
		
		
		
        }
    }
}
);