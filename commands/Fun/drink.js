exports.run = (client, msg) => {
        const user = msg.mentions.users.first()
        const doge = client.emojis.get(`310048332246548480`)
        if (msg.mentions.users.size === 0) return msg.channel.send(`-User is a required argument.`, {code: "diff"})
        if (user.id === msg.author.id) return msg.channel.send(`@ ${msg.author.username}#${msg.author.discriminator}, you can't give yourself drinks`, {code: "py"})
        var drinks = [
            `water :sweat_drops:`,
            `tea :tea:`,
            `lemonade :lemon: :droplet:`,
            `milk :milk:`,
        ]
        msg.channel.send(`:relieved: **${msg.author.username}** gave **${user.username}** ${doge} some ` + drinks[Math.floor(Math.random() * drinks.length)])
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
  name: "drink",
  description: "Make someone Drink something !",
  usage: "",
  usageDelim: "",
};