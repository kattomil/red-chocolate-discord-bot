let prefix = "b?"
exports.run = (client, msg) => {
    msg.author.send(`**Music Commands**:
\`\`\`asciidoc
= General =
${prefix}play :: Play a song by link or by name
${prefix}skip :: skip a number of songs or the new playing song
(Just who queued the song or an admin can skip)
${prefix}queue :: Show's the queue

= Admin =
${prefix}pause :: Pause music playlist.
${prefix}resume :: Resume music playlist.
${prefix}volume :: Adjust the playback volume between 1 and 200.
${prefix}leave :: Make me leave the voice channel
\`\`\``)
    msg.channel.send(`**\`\`\`apache\n<${msg.author.username}#${msg.author.discriminator}, Check your DMs\`\`\`**`)
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
  name: "music",
  description: "Music Commands !",
  usage: "",
  usageDelim: "",
};