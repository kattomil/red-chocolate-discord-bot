exports.run = (client, msg) => {

    let args = msg.content.split(" ").slice(1);

    if (args.length < 1) return msg.channel.send(`-Text is a required argument`, {code: "diff"})

    msg.channel.send(`:upside_down: : ` + args.join(' ').split('').reverse().join(''))
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
  name: "reverse",
  description: "Reverses the text you input !",
  usage: "",
  usageDelim: " ",
};