const Discord = require(`discord.js`)
const fs = require('fs');

exports.run = (client, msg) => {
    fs.readFile("./node_modules/komada/afk.json", 'utf8' , (err, data) => {//to read the json file
    if (err) throw err;
    const thing = JSON.parse(data);
    if(!thing[msg.author.id]){ // if the user is no't in the json file 
        msg.channel.send("Okay **" + msg.author.tag + "**, I have set your status to **AFK**")
        msg.guild.member(msg.author).setNickname(`[AFK] ` + msg.author.username)
     thing[msg.author.id] = "on"; //here you can put anything instead of on
    fs.writeFile("./node_modules/komada/afk.json", JSON.stringify(thing, null, 2), (err) => {//to write your options in the file
        if (err) throw err;
    })   
    }else{
        if(thing[msg.author.id]){//if the user is in the json file
            msg.channel.send("Welcome back **" + msg.author.tag + "**, I removed your AFK").then(m => m.delete(10000))
            msg.guild.member(msg.author).setNickname(msg.author.username)
         delete thing[msg.author.id]; //to remove from json file
    fs.writeFile("./node_modules/komada/afk.json", JSON.stringify(thing, null, 2), (err) => {
        if (err) throw err;
                 })    
              }
          }
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
  name: "afk",
  description: "Set you as afk",
  usage: "",
  usageDelim: " ",
};