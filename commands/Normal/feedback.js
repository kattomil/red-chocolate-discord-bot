const Discord = require("discord.js")
exports.run = (client, msg) => {
    let args = msg.content.split(" ").slice(1);
    let reason = args.slice(0).join(' ')
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
    var embed = new Discord.RichEmbed();
    embed.addField(`**Feedback** by **${msg.author.username}#${msg.author.discriminator} (${msg.author.id})**`, `${args.join(" ")}`)
    .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        client.channels.get('305759732973568003').sendEmbed(embed).then(m => m.react(`🆗`))
        msg.channel.send(`\`\`\`diff\n+Feedback Sent !\`\`\``)
        msg.react(`🆗`)
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
  name: "feedback",
  description: "Report a bug or add suggestions",
  usage: "",
  usageDelim: " ",
};