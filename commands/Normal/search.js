const Discord = require(`discord.js`)
exports.run = (client, msg) => {
    let args = msg.content.split(" ").slice(1);

    if (args[0] === "dictionary") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<http://www.urbandictionary.com/define.php?term=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        msg.channel.send({embed: embed}).then(m => m.edit(`🏙 **\`Dictionary\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "twitter") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://twitter.com/search?q=` + reason.join("%20") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        msg.channel.send({embed: embed}).then(m => m.edit(`🐦 **\`Twitter\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "facebook") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://www.facebook.com/search/top/?q=` + reason.join("%20") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        const fb = client.emojis.get(`340440662333718529`)
        msg.channel.send({embed: embed}).then(m => m.edit(`${fb} **\`Facebook\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "steam") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<http://store.steampowered.com/search/?term=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        const steam = client.emojis.get(`340441307686240256`)
        msg.channel.send({embed: embed}).then(m => m.edit(`${steam} **\`Steam\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "bing") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://www.bing.com/search?q=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        msg.channel.send({embed: embed}).then(m => m.edit(`🌆 **\`Bing\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "googlep") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://play.google.com/store/search?q=` + reason.join("%20") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        const gplay = client.emojis.get(`340441831928233984`)
        msg.channel.send({embed: embed}).then(m => m.edit(`${gplay} **\`Google Play\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "wikipedia") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://en.wikipedia.org/w/index.php?search=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        msg.channel.send({embed: embed}).then(m => m.edit(`📚 **\`Wikipedia\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "youtube") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://www.youtube.com/results?search_query=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        const yt = client.emojis.get(`340442523573026816`)
        msg.channel.send({embed: embed}).then(m => m.edit(`${yt} **\`Youtube\`** search for **\`${reason.join(` `)}\`**`))
    } else if (args[0] === "google") {
        let reason = args.slice(1)
        if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)
        var embed = new Discord.RichEmbed()
        .setDescription(`**<https://www.google.com/search?q=` + reason.join("+") + `>**`)
        .setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
        const google = client.emojis.get(`340442500567138304`)
        msg.channel.send({embed: embed}).then(m => m.edit(`${google} **\`Google\`** search for **\`${reason.join(` `)}\`**`))
    } else {
        msg.channel.send(`\`\`\`py\n@Missing a required option:\n# dictionary, twitter, facebook, steam, bing, googlep, wikipedia, youtube, google\`\`\``)
    }
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
  name: "search",
  description: "Search things ",
  usage: "",
  usageDelim: " ",
};