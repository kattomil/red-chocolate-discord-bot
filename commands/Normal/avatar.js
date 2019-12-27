const Discord = require("discord.js")
exports.run = (client, msg) => {
      var embed = new Discord.RichEmbed()
      var cemb = new Discord.RichEmbed()
      embed.setImage(msg.author.displayAvatarURL)
      .setDescription(`**${msg.author.username}#${msg.author.discriminator}**\'s avatar`)
      .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
      if(msg.mentions.users.size === 0) return msg.channel.send({embed: embed})
      const user = msg.mentions.users.first()
      cemb.setImage(user.displayAvatarURL)
      .setDescription(`**${user.username}#${user.discriminator}**\'s avatar`)
      .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
      msg.channel.send({embed: cemb})
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["av"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "avatar",
  description: "Your avatar or mentioned user avatar",
  usage: "",
  usageDelim: " ",
};