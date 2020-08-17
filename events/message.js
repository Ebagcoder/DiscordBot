const active = new Map();
const talkedRecently = new Set();

module.exports = (client, message) => {
    let ops = {
      active: active
    }

    if (message.author.bot) return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
 
    if (!cmd) return;

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("So fast! Wait a moment please!");
    } else {

        cmd.run(client, message, args, ops);

        talkedRecently.add(message.author.id);
        setTimeout(() => {

          talkedRecently.delete(message.author.id);
        }, 1500);
    }
  
    
};
