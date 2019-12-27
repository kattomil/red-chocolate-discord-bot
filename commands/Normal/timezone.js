const got = require('got');

exports.run = async (client, msg) => {

let args = msg.content.split(" ").slice(1);

if (args.length < 1) return msg.channel.send(`@ You must specify a time to convert.`, {code: "py"})

let input = args.join(' ');
let url = `https://api.duckduckgo.com/?q=${encodeURIComponent(input)}&format=json`;

msg.channel.send(`# Loading conversion...`, {code: "py"})

const res = await got(url, { json: true });

    if (!res || !res.body) {
        msg.channel.send('@ Could not load data from DDG.', {code: "py"});
    }

let data = res.body;

let answer = data['Answer'];

if (data['AnswerType'] === 'timezone_converter') {
    
        let matches = input.match(/(.*?)\s*(to|in)\s*(.*)/);
        let prefix;

        if (matches) {
            prefix = matches[1];
        } else {
            prefix = input;
        }

        msg.channel.send(`**Timezone**: ${prefix} \u2794 ${answer}`);
    } else {
        msg.channel.send(`@ No conversion found for ${input}`, {code: "py"});
    }

}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["tz"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "timezone",
  description: 'converts between timezones, using DuckDuckGo searches',
  usage: "",
  usageDelim: " ",
};