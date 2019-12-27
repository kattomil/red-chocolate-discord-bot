exports.run = (client, msg) => {
    if (!msg.content.startsWith(`b!`)) return;
    let args = msg.content.split(" ");
    console.log(`${msg.author.tag} : ${args.join(` `)}`)
    client.channels.get(`344078583075176448`).send(`**${msg.author.tag}** (${msg.author.id}) in **${msg.guild.name}** (${msg.guild.id}) : **\`${args.join(` `)}\`**`)
}

exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: false,
};

exports.help = {
  name: "watch",
  type: "monitors",
  description: "Log Commands",
};