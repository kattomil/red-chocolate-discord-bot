exports.run = (client, msg) => {
	
		if(msg.content.toLowerCase().includes(`discord.gg`)) {
     if(!msg.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) return;
		if (msg.channel.type === "dm") return;
      if(msg.guild.member(msg.author.id).hasPermission("ADMINISTRATOR")) return;
      msg.delete()
          msg.channel.send(`**\`\`\`apache
<${msg.author.username}#${msg.author.discriminator}, Stop Posting invite Links\`\`\`**`).then(m => m.delete(10000))
    }

    if(msg.content.toLowerCase().includes(`discord.io`)) {
     if(!msg.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) return;
		if (msg.channel.type === "dm") return;
      if(msg.guild.member(msg.author.id).hasPermission("ADMINISTRATOR")) return;
      msg.delete()
          msg.channel.send(`**\`\`\`apache
<${msg.author.username}#${msg.author.discriminator}, Stop Posting invite Links\`\`\`**`).then(m => m.delete(10000))
    }

    if(msg.content.toLowerCase().includes(`discord.me`)) {
     if(!msg.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) return;
		if (msg.channel.type === "dm") return;
      if(msg.guild.member(msg.author.id).hasPermission("ADMINISTRATOR")) return;
      msg.delete()
          msg.channel.send(`**\`\`\`apache
<${msg.author.username}#${msg.author.discriminator}, Stop Posting invite Links\`\`\`**`).then(m => m.delete(10000))
    }

    if(msg.content.toLowerCase().includes(`discord.li`)) {
     if(!msg.guild.member(client.user.id).hasPermission("MANAGE_MESSAGES")) return;
		if (msg.channel.type === "dm") return;
      if(msg.guild.member(msg.author.id).hasPermission("ADMINISTRATOR")) return;
      msg.delete()
          msg.channel.send(`**\`\`\`apache
<${msg.author.username}#${msg.author.discriminator}, Stop Posting invite Links\`\`\`**`).then(m => m.delete(10000))
    }
}

exports.conf = {
  enabled: true,
  ignoreBots: false,
  ignoreSelf: true,
};

exports.help = {
  name: "antiads",
  type: "monitors",
  description: "Remove Server Invites",
};