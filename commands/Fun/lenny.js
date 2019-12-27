exports.run = (client, msg) => {
    msg.delete()
    msg.channel.send(`​( ͡° ͜ʖ ͡°)`)
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
  name: "lenny",
  description: "​( ͡° ͜ʖ ͡°)",
  usage: "",
  usageDelim: " ",
};