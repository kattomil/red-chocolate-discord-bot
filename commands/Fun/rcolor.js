const Discord = require(`discord.js`)
exports.run = (client, msg) => {
    var color = '#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6)
	var embed = new Discord.RichEmbed()
        .setAuthor(`Hex:`, msg.author.displayAvatarURL)
		    .setDescription(color)
		    .setColor(color)
	msg.channel.send({embed: embed})
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["randomcolor"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "rcolor",
  description: "Random Hex Color",
  usage: "",
  usageDelim: " ",
};