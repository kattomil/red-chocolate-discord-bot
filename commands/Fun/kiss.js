exports.run = (client, msg) => {
      const user = msg.mentions.users.first()
      if(msg.mentions.users.size === 0) {
        return msg.channel.send(`-User is a required argument.`, {code: "diff"})
      }
    if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(`@ I know you love yourself, but...`, {code: "py"})
      if (msg.mentions.users.first().id === "238711670057336842") return msg.channel.send(`@ What are you trying? He is mine!`, {code: "py"})
      if (msg.mentions.users.first().id === `298463497715580948`) return msg.channel.send(`@ What are you trying? I am not yours!`, {code: "py"})
      msg.delete();
      msg.channel.send({file: "https://s-media-cache-ak0.pinimg.com/originals/ae/86/cd/ae86cd427a509f7a762f8c2eef79d3aa.jpg"}).then(m => m.edit(`😘 **${msg.author.username}#${msg.author.discriminator}** kissed **${user.username}#${user.discriminator}** 😘`))
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
  name: "kiss",
  description: "Kiss Someone !",
  usage: "",
  usageDelim: " ",
};