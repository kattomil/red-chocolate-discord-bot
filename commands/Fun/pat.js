exports.run = (client, msg) => {
        const user = msg.mentions.users.first()
        const doge = client.emojis.get(`310048332246548480`)
        const aww = client.emojis.get(`310048372583170048`)
        if (msg.mentions.users.size === 0) return msg.channel.send(`-User is a required argument.`, {code: "diff"})
        if (user.id === msg.author.id) return msg.channel.send(`@ ${msg.author.username}#${msg.author.discriminator}, you can't pat your own head`, {code: "py"})
        var pats = [
            `http://cdn2.list25.com/wp-content/uploads/2012/06/headpat.png`,
            `http://dingo.care2.com/pictures/greenliving/uploads/2015/06/ThinkstockPhotos-187961957.jpg`,
            `http://cdn.tipresentoilcane.com/wp-content/uploads/2013/05/06043135/cinoierioggi1.jpg`,
            `http://4.bp.blogspot.com/-HdLwzbFLFkY/VH6k1Zyj4jI/AAAAAAAACoA/wIev9BL7nbM/s1600/4533.jpg`,
            `http://dingo.care2.com/pictures/greenliving/1099/1098499.large.jpg`,
            `http://static.ettoday.net/images/403/d403381.jpg`,
            `https://meusanimais.com.br/wp-content/uploads/2016/06/convuls%C3%B5es-c%C3%A3es-1.jpg`,
        ]
        msg.channel.send({file: pats[Math.floor(Math.random() * pats.length)]}).then(m => m.edit(` **${user.username}** ${doge} had their head patted by **${msg.author.username}** ${aww}`))
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
  name: "pat",
  description: "Pat someone's head !",
  usage: "",
  usageDelim: "",
};