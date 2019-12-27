exports.run = (client, msg) => {
  let args = msg.content.split(" ").slice(1);

  let reason = args.slice(0).join(' ')
  if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)

        var urban = require('urban');
        search = urban(`${args.join(" ")}`);
    search.first(function(json) {
      if (!json) return msg.channel.send(`\`\`\`py\n@ I can't find this word in Urban Dictionary, try something else.\`\`\``)
        msg.channel.send(`\`\`\`ml
Definition For:
" ${json.word} "

"${json.definition}"
Author: "${json.author}"
Example:
"${json.example}"

Define ID: "${json.defid}"\`\`\``)
    })
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
  name: "urban",
  description: "Define words in Urban Dictionary",
  usage: "",
  usageDelim: " ",
};