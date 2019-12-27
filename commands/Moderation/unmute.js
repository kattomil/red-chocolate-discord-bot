const fs = require(`fs`);
exports.run = (client, msg) => {

    let reason = msg.content.split(` `).slice(2);
    let user = msg.mentions.users.first()

    if (msg.mentions.users.size < 1) return msg.channel.send(`-User is a required argument`, {code: "diff"})

    msg.guild.channels.forEach(ch => ch.overwritePermissions(user, {
            SEND_MESSAGES: null
          }))
	
    if (reason.length < 1) {
        return msg.channel.send(`= Mute Log =

Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: No reason provided`, {code: "asciidoc"})
    } else msg.channel.send(`= Mute Log =

Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: ${reason.join(` `)}`, {code: "asciidoc"})
}

exports.conf = {
  enabled: true,
  runIn: [`text`],
  aliases: [],
  permLevel: 4,
  botPerms: [`MANAGE_ROLES`, `MANAGE_CHANNELS`],
  requiredFuncs: [],
};

exports.help = {
  name: `unmute`,
  description: `Unmute someone !`,
  usage: ``,
  usageDelim: ` `,
};