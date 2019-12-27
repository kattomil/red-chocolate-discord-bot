const fs = require(`fs`);
exports.run = (client, msg) => {
    let reason = msg.content.split(` `).slice(2);
    let user = msg.mentions.users.first()

    if (msg.mentions.users.size < 1) return msg.channel.send(`-User is a required argument`, {code: "diff"})

    if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(`@ Are you trying to mute yourself?`, {code: "py"})
    if(msg.guild.member(user.id).hasPermission("MANAGE_CHANNELS")) return msg.channel.send(`@ I can't mute admins like ${user.tag} !`, {code: "py"})

    msg.guild.channels.forEach(ch => ch.overwritePermissions(user, {
            SEND_MESSAGES: false
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
  name: `mute`,
  description: `Mute someone !`,
  usage: ``,
  usageDelim: ` `,
};