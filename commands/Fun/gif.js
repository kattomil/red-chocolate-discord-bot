const got = require('got');
const API_KEY = 'dc6zaTOxFJmzC';
const Discord = require(`discord.js`)

exports.run = async (client, msg) => {

let args = msg.content.split(" ").slice(1);

if (args.length < 1) return msg.channel.send(`-Text is a required argument`, {code: "diff"}) 

const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(args.join(' '))}`, { json: true });

if (!res || !res.body || !res.body.data) {
        return msg.channel.send(`@ Failed to find a GIF that matched your query!`, {code: "py"})
    }

const embed = new Discord.RichEmbed()
.setAuthor(msg.author.tag, msg.author.displayAvatarURL)
.setImage(res.body.data.image_url)
.setColor('#' + ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6))
    msg.channel.send({embed: embed});
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
  name: "gif",
  description: 'Searches Giphy for GIFs',
  usage: "",
  usageDelim: " ",
};