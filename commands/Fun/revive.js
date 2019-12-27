exports.run = (client, msg) => {
      const user = msg.mentions.users.first()
      if(msg.mentions.users.size === 0) {
        return msg.channel.send(`-User is a required argument.`, {code: "diff"})
      }
    if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(`@ It seems like you're not dead...`, {code: "py"})
      if (msg.mentions.users.first().id === "238711670057336842") return msg.channel.send(`@ What are you trying? He is not dead!`, {code: "py"})
      if (msg.mentions.users.first().id === `298463497715580948`) return msg.channel.send(`@ What are you trying? I am not dead!`, {code: "py"})
      msg.delete();
      msg.channel.send({file: "http://images4.fanpop.com/image/photos/18100000/angels-anime-angels-18197114-500-375.jpg"}).then(m => m.edit(`😮 **${msg.author.username}#${msg.author.discriminator}** revived **${user.username}#${user.discriminator}** 😮`))
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "revive",
  description: "Revive Someone !",
  usage: "",
  usageDelim: " ",
};