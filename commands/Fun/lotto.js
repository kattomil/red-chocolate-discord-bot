exports.run = (client, msg) => {
    function lotto(){
      var slots = [
        '@ | 🍒 🍒 🌸 | YOU LOSE',
        '@ | 🍒 🌸 🌸 | YOU LOSE',
        '@ | 🍒 🌸 🍒 | YOU LOSE',
        '@ | 🌸 🌸 🍒 | YOU LOSE',
        '@ | 🌸 🍒 🍒 | YOU LOSE',
        '@ | 🌸 🍒 🌸 | YOU LOSE',
        '@ | 🍒 🍒 🌸 | YOU LOSE',
        '" | 🍒 🍒 🍒 | YOU WON',
        '" | 🌸 🌸 🌸 | YOU WON',
        '@ | 🍒 🌸 🌸 | YOU LOSE',
        '@ | 🍒 🌸 🍒 | YOU LOSE',
        '@ | 🌸 🌸 🍒 | YOU LOSE',
        '" | 🍒 🍒 🍒 | YOU WON',
        '" | 🌸 🌸 🌸 | YOU WON',
        '@ | 🌸 🍒 🍒 | YOU LOSE',
        '@ | 🌸 🍒 🌸 | YOU LOSE',
        '" | 🍒 🍒 🍒 | YOU WON',
        '" | 🌸 🌸 🌸 | YOU WON',

  ];

  var RN = Math.floor(Math.random()*slots.length);
  return slots[RN]
  }
  msg.channel.send(`
# Lotto Machine | ${msg.author.username}#${msg.author.discriminator}

${lotto()}`, {code: "py"})
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["slots"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "lotto",
  description: "Lotto (slots) Machine",
  usage: "",
  usageDelim: "",
};