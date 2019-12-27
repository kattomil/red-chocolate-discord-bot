exports.run = (client, msg) => {

    const answer = [
            `https://cdn.discordapp.com/attachments/320646879052431370/340146545309515776/yes.png`,
            `https://cdn.discordapp.com/attachments/320646879052431370/340146560891355138/nope.png`,
            `https://cdn.discordapp.com/attachments/320646879052431370/340146557548494858/maybe.png`,
];

    let args = msg.content.split(` `).slice(1);

    if (args.length < 1) return msg.channel.send(`-Text is a required argument.`, {code: `diff`})

    msg.channel.send({file: answer[Math.floor(Math.random() * answer.length)]}).then(m => m.edit(`Your question is \`${args.join(` `)}\` and my answer is...`))
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
  name: "8ball",
  description: "​Yes? No? Maybe? Who Knows :3",
  usage: "",
  usageDelim: " ",
};