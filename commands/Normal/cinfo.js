exports.run = (client, msg) => {
const moment = require("moment");
require("moment-duration-format");
    
    msg.channel.send(`= Channel Info =

•Channel Name :: #${msg.channel.name}
•Created At   :: ${moment(msg.channel.createdAt).format('DD.MM.YYYY')}
•Channel ID   :: ${msg.channel.id}`, { code: "asciidoc" })
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["channelinfo", "channeli"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "cinfo",
  description: "Info about the channel you're in",
  usage: "",
  usageDelim: " ",
};