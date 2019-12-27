exports.run = (client, msg) => {

    let args = msg.content.split(" ").slice(1);
    let reason = args.slice(0).join(' ')

    if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)

    msg.channel.send(msg.author.username + `#` + msg.author.discriminator + `**\`\`\`` + args.join(' ') + `\`\`\`**`).then(msg.delete())
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
  name: "talk",
  description: "Make the bot to say something",
  usage: "",
  usageDelim: " ",
};