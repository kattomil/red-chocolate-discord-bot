exports.run = (client, msg) => {
    let args = msg.content.split(` `).slice(1);
    let reason = msg.content.split(` `).slice(2);

    if (args[0] === "on") {
      msg.channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false
          })
          msg.channel.send(`@everyone has been muted here`, {code: "py"})
    } else if (args[0] === "off") {
      msg.channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: null
          })
          msg.channel.send(`@everyone has been unmuted here`, {code: "py"})
    } else if (args[0] === "allon") {
      msg.guild.channels.forEach(ch => ch.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false
          }))
          msg.channel.send(`@everyone has been muted everywhere`, {code: "py"})
    } else if (args[0] === "alloff") {
      msg.guild.channels.forEach(ch => ch.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: null
          }))
          msg.channel.send(`@everyone has been unmuted everywhere`, {code: "py"})
    } else {
        msg.channel.send(`@ Missing a required option:
# on, off, allon, alloff`, {code: "py"})
    }
}

exports.conf = {
  enabled: true,
  runIn: [`text`],
  aliases: [`ld`],
  permLevel: 8,
  botPerms: [`MANAGE_CHANNELS`, `MANAGE_ROLES`],
  requiredFuncs: [],
};

exports.help = {
  name: `lockdown`,
  description: `Lock a channel or all channels !`,
  usage: ``,
  usageDelim: ` `,
};