const Discord = require('discord.js');

module.exports = (client, member) =>{
	
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	
	if (!channel) return;
  
	member.send(`Welcome to the server ${member} please read the rule channel and enjoy your journey to our server!`);
	
	let sicon = member.user.displayAvatarURL();
	let serverembed = new Discord.MessageEmbed()
		.setColor("#ff0000")
		.setThumbnail(sicon)
		.addField("Welcome to ${guild}!",`A new member has joined to our server @${member}`)
		.addField("Where should i start ?","You must check the rules channel.");

	channel.send(serverembed);
}
