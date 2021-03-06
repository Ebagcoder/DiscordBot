const Discord = require('discord.js');
const fs = require('fs');

const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
exports.run = (client, message, args) => {
    const command = message.content.split(' '); 

    if(command[1] == undefined){
        const embed = new Discord.MessageEmbed()
            .setColor(randomColor)
            .addField("Commands",`You can view commands at [github.com](https://github.com/Ebagcoder/DiscordBot/wiki/Bot-Commands)`);
        message.channel.send(embed);    
    }

    else if(command[1] != undefined){ 
        fs.readFile(__dirname + '/../../jsonFiles/commands.json', (err, dataJson) => {  
            if (err) throw err;
            let helpMe = JSON.parse(dataJson);
            let commandName = command[1];

            try{
                const embed = new Discord.MessageEmbed()
                    .setColor(randomColor)
                    .addField(`Command: $${helpMe[commandName].name}`,`Group: ${helpMe[commandName].group}\n`+`Desc: ${helpMe[commandName].desc}\n`+`Usage: ${helpMe[commandName].usage}\n`+`Example: ${helpMe[commandName].example}\n`);
                message.channel.send(embed);    
            }
            catch(error){
                message.channel.send("I could not find that command!");
            }
        });
    }
}
