exports.run = (client, msg) => {

    let args = msg.content.split(" ").slice(1);
    let reason = args.slice(1).join(" ")

    const user = msg.mentions.users.first();

    if (msg.mentions.users.size === 0) return msg.channel.send(`-User is a required argument.`, {code: "diff"})
    if (msg.mentions.users.first().id === msg.author.id) return msg.channel.send(`@ Are you trying to kick yourself?`, {code: "py"})

    if (msg.guild.member(user).hasPermission(`KICK_MEMBERS`)) return msg.channel.send(`@ Can't kick admins like ${user.tag}.`, {code: "py"})

       if (reason.length < 1) return msg.guild.member(msg.mentions.users.first()).kick(`By ${msg.author.tag}`).then(member => {
         msg.channel.send(`= Kick Log =
        
Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: No reason provided`, {code: "asciidoc"}).then(client.users.get(msg.guild.owner.user.id).send(`= Kick Log =
        
Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: No reason provided`, {code: "asciidoc"})).then(client.users.get(user.id).send(`= You Got Kicked =

Guild     :: ${msg.guild.name} (${msg.guild.id})
Moderator :: ${msg.author.tag}
Reason    :: No reason provided`, {code: "asciidoc"}))
       })
      msg.guild.member(msg.mentions.users.first()).kick(reason + ` - By ${msg.author.tag}`).then(member => {
         msg.channel.send(`= Kick Log =
        
Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: ${reason}`, {code: "asciidoc"}).then(client.users.get(msg.guild.owner.user.id).send(`= Kick Log =
        
Moderator :: ${msg.author.tag}
User      :: ${user.tag}
Reason    :: ${reason}`, {code: "asciidoc"})).then(client.users.get(user.id).send(`= You Got Kicked =

Guild     :: ${msg.guild.name} (${msg.guild.id})
Moderator :: ${msg.author.tag}
Reason    :: ${reason}`, {code: "asciidoc"}))
       })
      }

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 6,
  botPerms: ["KICK_MEMBERS"],
  requiredFuncs: [],
};

exports.help = {
  name: "kick",
  description: "Kick who is breaking the rules !",
  usage: "",
  usageDelim: "",
};