exports.run = async (client, msg) => {
  const {get} = require("snekfetch");
  get("https://random.cat/meow").then(response => {
    var embed = new client.methods.Embed()
    .setImage(response.body.file)
    .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
    .setTitle('Random Cat', msg.author.displayAvatarURL)
    msg.channel.send({embed})
  });
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "cat",
  description: "Send random cat image API",
  usage: "",
  usageDelim: "",
};