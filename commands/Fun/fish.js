exports.run = (client, msg) => {
    function fishes(){
      var caught = [
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :battery: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :fish: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :tropical_fish: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :blowfish: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :lemon: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :chocolate_bar: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :crab: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :bread: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :avocado: !`,
        `Well done **${msg.author.username}#${msg.author.discriminator}**! You caught 1 :whale: !`,

  ];

  var RN = Math.floor(Math.random()*caught.length);
  return caught[RN]
  }

  msg.channel.send(fishes())
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
  name: "fish",
  description: "Go fishing !",
  usage: "",
  usageDelim: "",
};