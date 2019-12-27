exports.run = (client, msg) => {
const moment = require("moment");
require("moment-duration-format");

let i = 0;
msg.guild.members.forEach(member => {
    if(!member.user.bot) i = i + 1;
});
let b = 0;
msg.guild.members.forEach(member => {
    if(member.user.bot) b = b + 1;
});

msg.channel.send(`= Server info =

• Server Name           :: ${msg.guild.name}
• Server ID             :: ${msg.guild.id}
• Server Region         :: ${msg.guild.region}
• Icon URL              :: ${msg.guild.iconURL}
• Owner's Username      :: ${msg.guild.owner.user.username}
• Owner's Discriminator :: ${msg.guild.owner.user.discriminator}
• Owner's ID            :: ${msg.guild.owner.user.id}
• Guild Created         :: ${moment(msg.guild.createdAt).format('DD.MM.YYYY')}
• Members               :: ${msg.guild.memberCount}
• Humans                :: ${i}
• Bots                  :: ${b}
• Verification Level    :: ${msg.guild.verificationLevel}
• Roles                 :: ${msg.guild.roles.size} Role(s)
• Emojis                :: ${msg.guild.emojis.map(emoji => `:` +  emoji.name + `:`).join(", ")}`, { code: "asciidoc" })

}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["sinfo", "si"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "serverinfo",
  description: "Info about your server",
  usage: "",
  usageDelim: " ",
};