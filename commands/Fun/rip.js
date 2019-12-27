exports.run = (client, msg) => {
      const dead = client.emojis.get(`340131240726233091`)
      const user = msg.mentions.users.first()
      if(msg.mentions.users.size === 0) {
        return msg.channel.send(`-User is a required argument.`, {code: "diff"})
      }
    if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(`@ Stop mutilating yourself !!!`, {code: "py"})
      if (msg.mentions.users.first().id === "238711670057336842") return msg.channel.send(`@ What are you trying? He is mine!`, {code: "py"})
      if (msg.mentions.users.first().id === `298463497715580948`) return msg.channel.send(`@ What are you trying? I am not yours!`, {code: "py"})
      msg.delete();
      msg.channel.send({file: "http://serialu.tv/film/wallpapers/big/-ubiytsa-akame-2.jpg"}).then(m => m.edit(`${dead} **${msg.author.username}#${msg.author.discriminator}** killed **${user.username}#${user.discriminator}** ${dead}`))
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
  name: "rip",
  description: "Kill Someone ! :o",
  usage: "",
  usageDelim: " ",
};