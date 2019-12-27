exports.run = (client, msg) => {
  let args = msg.content.split(" ").slice(1);

  let reason = args.slice(0).join(' ')
  if (reason.length < 1) return msg.channel.send(`\`\`\`diff\n-Text is a required argument.\`\`\``)

      function cleverbot(){
        var textArray = [
          'I love to play League of Legends',
          `My Developer is ${client.users.get(`238711670057336842`).username}#${client.users.get(`238711670057336842`).discriminator}`,
          'Heeyyyy !',
          '_SEEN_',
          'I\'m Red Chocolate, look at me! :D',
          'You like chocolate? because chocolate don\'t like you',
          'Sometimes I wanna eat myself',
          'I like to sing in shower',
          'Love me like you do ;3',
          '\~\~I love you\~\~ I love food',
          'Pacito, pacito, Suave suavecito',
          'Wat? ;-;',
          'Mrrr...... xd',
          'Choco, Choco, Chocolate... Red Chocolate !',
          'Helloooo ! :D',
          'Wanna play something?',
          'Find the rainbow, taste the rainbow!',
          'Hey I just met you\nAnd this is crazy\nBut here\'s my number\nSo call me maybe',
          'The club isn\'t the best place to find a lover\nSo the bar is where I go',
          'Girl, you know I want your love\nYour love was handmade for somebody like me',
          'I may be crazy, don\'t mind me',

  ];
  var RN = Math.floor(Math.random()*textArray.length);
  return textArray[RN]
  }

  msg.channel.startTyping();
  msg.channel.send(`**` + cleverbot() + `**`).then(msg.channel.stopTyping())
  }

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["clbot"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "cleverbot",
  description: "Talk to the bot !",
  usage: "",
  usageDelim: "",
};