exports.run = (client, msg) => {
    if (msg.author.id === "242189290119888897") return msg.channel.send(`\`\`\`diff\n+${msg.author.username}#${msg.author.discriminator}, You are one of my developers!\`\`\``)
    if (msg.author.id === "238711670057336842") return msg.channel.send(`\`\`\`diff\n+${msg.author.username}#${msg.author.discriminator}, You are one of my developers!\`\`\``)
    if (msg.author.id === "241216483592634368") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "234252678547374080") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "253775528782331904") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "323512133411143682") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
	if (msg.author.id === "86478826296578048") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "195223544186142727") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "253544423110082589") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    if (msg.author.id === "227110473466773504") return msg.channel.send(`\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, You are one of fantastic people who helped developers!\`\`\``)
    msg.channel.send(`\`\`\`diff\n-${msg.author.username}#${msg.author.discriminator}, You are not one of my developers!\`\`\``)
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["developer"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "dev",
  description: "Check if you are a developer or a contributer",
  usage: "",
  usageDelim: " ",
};