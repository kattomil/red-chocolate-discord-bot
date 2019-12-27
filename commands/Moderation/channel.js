const fs = require('fs');
exports.run = (client, msg) => {

    let args = msg.content.split(` `).slice(1);
    let aargs = args.slice(1)

    if (args[0] === "create") {

    if (args[1] === "text") {

      var regEx = /[^abcdefghijklmnopqrstuvwxyz1234567890]+/g
      var channelName = msg.content.split(' ').slice(3)[0]

      let text = aargs.slice(1)
      if (text.length < 1) return msg.channel.send(`-Name is a required argument.`, {code: "diff"})

    if (regEx.test(channelName)) return msg.channel.send('-Sorry but channel name must be alphanumeric with dashes or underscores', {code: "diff"})
        msg.guild.createChannel(`${text.join("-")}`, `text`).then(msg.channel.send(`+ Created a new Text Channel: #${text.join("-")}`, {code: "diff"}))
        
    } else if (args[1] === "voice") {
      let voice = aargs.slice(1)
      if (voice.length < 1) return msg.channel.send(`-Name is a required argument.`, {code: "diff"})

        msg.guild.createChannel(`${voice.join(" ")}`, `voice`).then(msg.channel.send(`+ Created a new Voice Channel: ${voice.join(" ")}`, {code: "diff"})).catch(e => msg.channel.send('```e```'))
        
    } else {

        msg.channel.send(`@Missing a required option:
# text, voice`, {code: "py"})
        
    }
} else if (args[0] === "delete") {
    
        if (args[1] === "text") {

        let text = aargs.slice(1)
        if (text.length < 1) return msg.channel.send(`-Name is a required argument.`, {code: "diff"})

        let delch = msg.guild.channels.find(`name`, `${text.join(``)}`)
        if (!delch) return msg.channel.send(`@ I don't see any text channels named: #${text.join(``)}`, {code: "py"})

        delch.delete().then(msg.channel.send(`+ Deleted one of your Text Channels: #${text.join(``)}`, {code: "diff"}))

    } else if (args[1] === "voice") {
        
        let voice = aargs.slice(1)
        if (voice.length < 1) return msg.channel.send(`-Name is a required argument.`, {code: "diff"})

        let delch = msg.guild.channels.find(`name`, `${voice.join(` `)}`)
        if (!delch) return msg.channel.send(`@ I don't see any voice channels named: ${voice.join(``)}`, {code: "py"})

        delch.delete().then(msg.channel.send(`+ Deleted one of your Voice Channels: ${voice.join(``)}`, {code: "diff"}))

    } else {
        
        msg.channel.send(`@Missing a required option:
# text, voice`, {code: "py"})

        }
    } else if (args[0] === "edit") {

            let text = aargs.slice(1)

            if (args[1] === "topic") {

                if (text.length < 1) return msg.channel.send(`-Channel Name is a required argument.`, {code: "diff"})

                let editch = msg.guild.channels.find(`name`, `${text[0]}`)
                if (!editch) return msg.channel.send(`@ I don't see any text channels named: #${text[0]}`, {code: "py"})

                let topic = text.slice(1)
                if (topic.length < 1) return msg.channel.send(`-Topic is a required argument.`, {code: "diff"})

                editch.setTopic(`${topic.join(" ")}`).then(msg.channel.send(`+ Changed topic for channel #${text[0]} : ${topic.join(" ")}`, {code: "diff"}))
            
        } else if (args[1] === "name") {

                let name = text.slice(1)
                var regEx = /[^abcdefghijklmnopqrstuvwxyz1234567890]+/g
                var channelName = name

                if (text.length < 1) return msg.channel.send(`-Channel Name is a required argument.`, {code: "diff"})

                if (regEx.test(channelName)) return msg.channel.send('-Sorry but channel name must be alphanumeric with dashes or underscores', {code: "diff"})
                
                let editch = msg.guild.channels.find(`name`, `${text[0]}`)
                if (!editch) return msg.channel.send(`@ I don't see any text channels named: #${text[0]}`, {code: "py"})

                if (name.length < 1) return msg.channel.send(`-New Name is a required argument.`, {code: "diff"})

                editch.setName(`${name.join("")}`).then(msg.channel.send(`+ Changed name for channel #${text[0]} : ${name.join("")}`, {code: "diff"}))
            
        } else if (args[1] === "pos") {

            let pos = text.slice(1)

            if (text.length < 1) return msg.channel.send(`-Channel Name is a required argument.`, {code: "diff"})

            let editch = msg.guild.channels.find(`name`, `${text[0]}`)
            if (!editch) return msg.channel.send(`@ I don't see any text channels named: #${text[0]}`, {code: "py"})

            if (pos.length < 1) return msg.channel.send(`-Number is a required argument.`, {code: "diff"})

            var regEx = /[^1234567890]/g
            var channelName = pos
            if (regEx.test(channelName)) return msg.channel.send('-Sorry but channel position must be an number.', {code: "diff"})

            editch.setPosition(pos[0]).then(msg.channel.send(`+ Changed position for channel #${text[0]} : ${pos[0]}`, {code: "diff"}))

        } else {
            
        msg.channel.send(`@Missing a required option:
# topic, name, pos`, {code: "py"})

            } 
    } else {

        msg.channel.send(`@Missing a required option:
# create, delete, edit`, {code: "py"})

        }
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["ch"],
  permLevel: 4,
  botPerms: ["MANAGE_CHANNELS"],
  requiredFuncs: [],
};

exports.help = {
  name: "channel",
  description: "Create/Delete/Edit Text/Voice channels !",
  usage: "",
  usageDelim: " ",
};