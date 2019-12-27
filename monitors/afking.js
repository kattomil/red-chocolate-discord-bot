const fs = require('fs');
exports.run = (client, msg) => {
    if (msg.content.toLowerCase().startsWith(`b!afk`) || msg.content.toLowerCase().startsWith(`r!afk`)) return;
    if(msg.content.includes(msg.mentions.members.first())){
      fs.readFile("./node_modules/komada/afk.json", 'utf8' , (err, data) => {
    if (err) throw err;
    const thing = JSON.parse(data);
    if(thing[msg.mentions.members.first().id]){
        msg.channel.send(`Sorry **<@${msg.author.id}>**, but it appears that **${msg.mentions.users.first().tag}** is currently **AFK**. Please try again when they've removed their AFK status`)
    }
      })
    }
	
	if(msg.content){
      fs.readFile("./node_modules/komada/afk.json", 'utf8' , (err, data) => {
            if (err) throw err;
                 const thing = JSON.parse(data);
    if(thing[msg.author.id]){
        msg.channel.send("Welcome back **" + msg.author.tag + "**, I removed your AFK")
        msg.guild.member(msg.author).setNickname(msg.author.username)
           delete thing[msg.author.id];
    fs.writeFile("./node_modules/komada/afk.json", JSON.stringify(thing, null, 2), (err) => {
        if (err) throw err;
        })
    }
        })
  }
}

exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: false,
};

exports.help = {
  name: "afking",
  type: "monitors",
  description: "Watching over AFK Users",
};