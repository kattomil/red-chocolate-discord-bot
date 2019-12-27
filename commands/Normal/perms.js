exports.run = (client, msg) => {
    msg.channel.send(`**${msg.author.username}#${msg.author.discriminator}**'s Permissions` + "\`\`\`https\n" + JSON.stringify(msg.channel.permissionsFor(msg.author).serialize(), null, 4) + "\n\`\`\`")
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["myperms"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "perms",
  description: "Check your permissions !",
  usage: "",
  usageDelim: " ",
};