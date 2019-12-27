exports.run = (client, msg) => {

    if(msg.content.toLowerCase().includes(` choco`)) {
        msg.react(`🍫`)
    }

    if(msg.content.toLowerCase().includes(` caine`) || msg.content.toLowerCase().includes(` woof`) || msg.content.toLowerCase().includes(` ham`) || msg.content.toLowerCase().includes(` dog`)) {
        msg.react(`🐶`)
    }

    if(msg.content.toLowerCase().includes(` pisica`) || msg.content.toLowerCase().includes(` meow`) || msg.content.toLowerCase().includes(` miau`) || msg.content.toLowerCase().includes(` cat`)) {
        msg.react(`🐱`)
    }

    if(msg.content.toLowerCase().includes(` lup`) || msg.content.toLowerCase().includes(` howl`) || msg.content.toLowerCase().includes(` wolf`)) {
        msg.react(`🐺`)
    }

    if(msg.content.toLowerCase().includes(` leu`) || msg.content.toLowerCase().includes(` roar`) || msg.content.toLowerCase().includes(` lion`)) {
        msg.react(`🦁`)
    }

    if(msg.content.toLowerCase().includes(` chitara`) || msg.content.toLowerCase().includes(` muzica`) || msg.content.toLowerCase().includes(` music`) || msg.content.toLowerCase().includes(`guitar`)) {
        msg.react(`🎸`)
    }

    if(msg.content.toLowerCase().includes(` mancare`) || msg.content.toLowerCase().includes(` food`) || msg.content.toLowerCase().includes(` life`)) {
        msg.react(`🍔`).then(msg.react(`🍕`)).then(msg.react(`🍟`)).then(msg.react(`🌭`))
    }

    if (msg.content.toLowerCase().includes(` hamburger`) || msg.content.toLowerCase().includes(` cheeseburger`)) {
        msg.react(`🍔`)
    }

    if (msg.content.toLowerCase().includes(` pizza`)) {
        msg.react(`🍕`)
    }

    if (msg.content.toLowerCase().includes(` fries`) || msg.content.toLowerCase().includes(` cartofi`)) {
        msg.react(`🍟`)
    }

    if (msg.content.toLowerCase().includes(` hotdog`)) {
        msg.react(`🌭`)
    }
}

exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: true,
};

exports.help = {
  name: "reacts",
  type: "monitors",
  description: "React to messages",
};