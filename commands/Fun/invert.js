var Jimp = require('jimp')

exports.run = (client, msg) => {
if (msg.mentions.users.size === 0) {
      const res = msg.channel.send(`\`\`\`py\n@ 🖼 Generating...\`\`\``)
      Jimp.read(msg.author.avatarURL, (err, avatar) => {
        if (err) return msg.edit(`\`\`\`diff\n-failed while generating.\`\`\``)
        avatar.invert()
        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          msg.channel.send({
            files: [{
              attachment: buffer,
              name: 'inverted.png'
            }]
          })
        })
      })
    } else {
      const res = msg.channel.send(`\`\`\`py\n@ 🖼 Generating...\`\`\``)
      Jimp.read(msg.mentions.users.first().avatarURL, (err, avatar) => {
        if (err) return msg.edit(`\`\`\`diff\n-failed while generating.\`\`\``)
        avatar.invert()
        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
          msg.channel.send({
            files: [{
              attachment: buffer,
              name: 'inverted.png'
            }]
          })
        })
      })
    }
  };

  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
  };

  exports.help = {
    name: "invert",
    description: "Invert your avatar or mentioned user avatar",
    usage: "",
    usageDelim: "",
  };