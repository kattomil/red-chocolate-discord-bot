exports.run = (client, msg) => {
    let args = msg.content.split(` `).slice(1);
    let reason = args.slice(1)

    if (args.length < 1) return msg.channel.send(`-Number is a required argument.`, {code: `diff`})

    var regEx = /[^1234567890]/g
    if (regEx.test(args)) return msg.channel.send('-Number is a required argument.', {code: "diff"})

    msg.delete().then(msg.channel.bulkDelete(args[0]))
    
    msg.channel.send(`**` + msg.author.username + `#` + msg.author.discriminator + `** deleted ***` + args[0] + `*** messages!`).then(m => m.delete(5000))
}

exports.conf = {
  enabled: true,
  runIn: [`text`],
  aliases: [`purge`],
  permLevel: 3,
  botPerms: [`MANAGE_MESSAGES`],
  requiredFuncs: [],
};

exports.help = {
  name: `clear`,
  description: `Clear the chat !`,
  usage: ``,
  usageDelim: ` `,
};