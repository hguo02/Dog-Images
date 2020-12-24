const Discord = require('discord.js');
const client =  new Discord.Client();


var fs = require("fs");
const dogArray = fs.readFileSync("./picture-extensions.txt", "utf-8").split("\n");


client.on('ready', function() {
    console.log("Hello! I'm here for the party.");
});


client.on("message", function(msg) {
    if (msg.content === "!dog") {
        msg.channel.send("Here you go! :)");

        var randomNumber =  Math.floor(Math.random() * dogArray.length);
        var image = dogArray[randomNumber];

        //console.log(image);
        msg.channel.send("https://random.dog/" + image);
    }
});

client.login(process.env.BOTTOKEN);
