exports.run = (client, msg) => {
          let args = msg.content.split(" ").slice(1);

    	  if (args[0] === "nmf") {
		  let nmf = `https://www.exboyfriendrecovery.com/wp-content/uploads/2013/09/not-my-fault.jpg`
		  msg.channel.send({file: nmf}).then(m => m.edit(`\`\`\`ml
Tag #1
Not My Fault\`\`\``))
	  } else if (args[0] === "ayy") {
		  let lmao =`http://www.badideatshirts.com/Assets/ProductImages/LMAO.jpg`
		  msg.channel.send({file: lmao}).then(m => m.edit(`\`\`\`ml
Tag #2
Ayy, LMAO\`\`\``))
	  } else if (args[0] === "redinv") {
		  msg.channel.send(`\`\`\`ml
Tag #3
Red Invite + Server Invite

"
Bot Invite (Full Acces):
https://discordapp.com/oauth2/authorize?permissions=2146958463&scope=bot&client_id=298463497715580948

Server Invite:
https://discord.gg/smU3RwN
"\`\`\``)
	  } else if (args[0] === "defaultc") {
		  msg.channel.send(`\`\`\`ml
Tag #4
Default Channel For This Guild

"
Default Channel Name                    :: ${msg.guild.defaultChannel.name}
Default Channel ID (is the Server ID)   :: ${msg.guild.defaultChannel.id}
"\`\`\``)
	  } else if (args[0] === "defaultchannel") {
		  msg.channel.send(`\`\`\`ml
Tag #4
Default Channel For This Guild

"
Default Channel Name                    :: ${msg.guild.defaultChannel.name}
Default Channel ID (is the Server ID)   :: ${msg.guild.defaultChannel.id}
"\`\`\``)
	  } else if (args[0] === "creator") {
		  msg.channel.send(`\`\`\`ml
Tag #5
My Creator

"
${client.users.get(`238711670057336842`).username}#${client.users.get(`238711670057336842`).discriminator} (238711670057336842)

Contributors:
${client.users.get(`323512133411143682`).username}#${client.users.get(`323512133411143682`).discriminator} (323512133411143682)
"\`\`\``)
    } else {
		  msg.channel.send(`\`\`\`ml\nTags: " nmf, ayy, redinv, defaultc / defaultchannel, creator "\`\`\``)
	  }
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["tags"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "tag",
  description: "Tags >.<",
  usage: "",
  usageDelim: " ",
};