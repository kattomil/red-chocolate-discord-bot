exports.run = (client, msg) => {
    let args = msg.content.split(` `).slice(1);
    const cgrade = msg.guild.channels.find(`name`, `cereri-grade`)
    const cup = msg.guild.channels.find(`name`, `cereri-up`)
    const cevents = msg.guild.channels.find(`name`, `events`)
    const bots = msg.guild.channels.find(`name`, `bots-zone`)
    const cpartener = msg.guild.channels.find(`name`, `cereri-partener`)
    const gfx = msg.guild.channels.find(`name`, `gfx`)
    const rules = msg.guild.channels.find(`name`, `rules`)
    const ann = msg.guild.channels.find(`name`, `anunturi`)
    const music = msg.guild.channels.find(`name`, `music`)
    const admin = msg.guild.channels.find(`name`, `admin-zone`)
          if (args[0] === "create") {
      if (!cgrade) {
        msg.guild.createChannel(`cereri-grade`, `text`)
      }
      if (!cup) {
        msg.guild.createChannel(`cereri-up`, `text`)
      }
      if (!cevents) {
        msg.guild.createChannel(`events`, `text`)
      }
      if (!bots) {
        msg.guild.createChannel(`bots-zone`, `text`)
      }
      if (!cpartener) {
        msg.guild.createChannel(`cereri-partener`, `text`)
      }
      if (!gfx) {
        msg.guild.createChannel(`gfx`, `text`)
      }
      if (!rules) {
        msg.guild.createChannel(`rules`, `text`)
      }
      if (!ann) {
        msg.guild.createChannel(`anunturi`, `text`)
      }
      if (!music) {
        msg.guild.createChannel(`music`, `text`)
      }
      if (!admin) {
        msg.guild.createChannel(`admin-zone`, `text`)
      }
      msg.guild.createChannel(`⛔Admin Zone⛔`, `voice`)
      msg.guild.createChannel(`🎵Music#1🎵`, `voice`)
      msg.guild.createChannel(`🎵Music#2🎵`, `voice`)
      msg.guild.createChannel(`🎵Music#3🎵`, `voice`)
      msg.guild.createChannel(`🎮Games#1🎮`, `voice`)
      msg.guild.createChannel(`🎮Games#2🎮`, `voice`)
      msg.guild.createChannel(`🎮Games#3🎮`, `voice`)
      msg.channel.send(`= Created Forum =

Text Channels  :: #cereri-grade, #cereri-up, #events, #bots-zone, #cereri-partener, #gfx, #rules, #anunturi, #music, #admin-zone
Voice Channels :: ⛔Admin Zone⛔, 🎵Music#1🎵, 🎵Music#2🎵, 🎵Music#3🎵, 🎮Games#1🎮, 🎮Games#2🎮, 🎮Games#3🎮`, {code: "asciidoc"})
    } else if (args[0] === "delete") {
    cgrade.delete()
    cup.delete()
    cevents.delete()
    bots.delete()
    cpartener.delete()
    gfx.delete()
    rules.delete()
    ann.delete()
    music.delete()
    admin.delete()
    msg.guild.channels.find(`name`, `⛔Admin Zone⛔`).delete()
    msg.guild.channels.find(`name`, `🎵Music#1🎵`).delete()
    msg.guild.channels.find(`name`, `🎵Music#2🎵`).delete()
    msg.guild.channels.find(`name`, `🎵Music#3🎵`).delete()
    msg.guild.channels.find(`name`, `🎮Games#1🎮`).delete()
    msg.guild.channels.find(`name`, `🎮Games#2🎮`).delete()
    msg.guild.channels.find(`name`, `🎮Games#3🎮`).delete()
    msg.channel.send(`+ All what I've created, is deleted now ! 😉`, {code: "diff"})
  } else if (args[0] === "setperms") {
      msg.guild.channels.find(`name`, `⛔Admin Zone⛔`).overwritePermissions(msg.guild.id, {
            CONNECT: false
          })
      msg.guild.channels.find(`name`, `admin-zone`).overwritePermissions(msg.guild.id, {
            READ_MESSAGES: false
          })
      msg.guild.channels.find(`name`, `rules`).overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false
          })
      msg.guild.channels.find(`name`, `anunturi`).overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false
          })
          msg.channel.send(`= Changed Forum Permissions =

⛔Admin Zone⛔:: Just Admins can join
#admin-zone    :: Just Admins can see and write in it
#anunturi      :: Just Admins can write in it
#rules         :: Just Admins can write in it`, {code: "asciidoc"})
    } else {
      msg.channel.send(`@Missing a required option:
# create, delete, setperms`, {code: "py"})
    }
}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 9,
  botPerms: ["MANAGE_ROLES", "MANAGE_CHANNELS"],
  requiredFuncs: [],
};

exports.help = {
  name: "forum",
  description: "Transform your server in a forum with just one command !",
  usage: "",
  usageDelim: " ",
};