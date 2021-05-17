const Discord = require('discord.js');
const client = new Discord.Client()
const TOKEN = "Your bot token"
// variables
client.on("ready", () =>{
    client.user.setPresence({
      status: 'online',
      activity: {
          name: 'Open Source bots',
          type: 'PLAYING',
      }
  });
  });
//custom status

  client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    if (command === "ping") {
    
        message.channel.send("Pong!").then(m =>{
        
            var ping = m.createdTimestamp - message.createdTimestamp;
  
            m.edit("Pong! " +  '`' + `${ping}ms` + '`')
        });
  
    };
});
// end of command handler


client.login(TOKEN)