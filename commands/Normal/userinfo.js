exports.run = (client, msg) => {
const moment = require("moment");
require("moment-duration-format");
const user = (msg.mentions.users.first());

if(msg.mentions.users.size === 0) return msg.channel.send(`\`\`\`diff\n-User is a required argument.\`\`\``)
msg.channel.send(`= User info =

• Username        :: ${user.username}
• ID              :: ${user.id}
• Discriminator   :: ${user.discriminator}
• Created         :: ${moment(user.createdAt).format(`[Year] YYYY/[Month] MM/[Day] DD/[Hour] hh/[Minute] mm/[Second] ss`)}
• Avatar ID       :: ${user.avatar}
• Avatar URL      :: ${user.displayAvatarURL}
• Last Message ID :: ${user.lastMessageID}
• Status          :: ${user.presence.status}
• Is a bot?       :: ${user.bot}
• Roles           :: ${msg.guild.member(user).roles.map(r => r.name).join(" | ")}`, { code: "asciidoc" })
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["uinfo"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "userinfo",
  description: "Info about the mentioned user",
  usage: "",
  usageDelim: " ",
};