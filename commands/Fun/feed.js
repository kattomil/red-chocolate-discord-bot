exports.run = (client, msg) => {
        const user = msg.mentions.users.first()
        const doge = client.emojis.get(`310048332246548480`)
        if (msg.mentions.users.size === 0) return msg.channel.send(`-User is a required argument.`, {code: "diff"})
        if (user.id === msg.author.id) return msg.channel.send(`@ ${msg.author.username}#${msg.author.discriminator}, you can't give yourself food`, {code: "py"})
        var food = [
            `bread :bread:`,
            `meat on bones :meat_on_bone:`,
            `poultry legs :poultry_leg:`,
            `cheese :cheese:`,
            `tacos :taco:`,
            `burritos :burrito:`,
            `potatoes :potato:`,
            `bananas :banana:`,
            `apples :apple:`,
            `bacon :bacon:`,
        ]
        msg.channel.send(`:yum: **${msg.author.username}** is feeding **${user.username}** ${doge} with ` + food[Math.floor(Math.random() * food.length)])
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
  name: "feed",
  description: "Make someone Eat something !",
  usage: "",
  usageDelim: "",
};