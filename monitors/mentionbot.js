exports.run = (client, msg) => {
function text() {
	let responses = [
	"hi there",
	"what's up?",
	"do you need something?",
	"hello ! :wave:",
	"what do you want?",
	"hi :smile:",
	"hello :smile:",
	"hi ! :wave:",
	]
	var random = Math.floor(Math.random()*responses.length)
  return responses[random]
}
	if (msg.content.toLowerCase().includes(`<@${client.user.id}>`)) {
		msg.channel.send(`**${text()} \`${msg.author.username}#${msg.author.discriminator}\`**`)
	}
}

exports.conf = {
  enabled: true,
  ignoreBots: false,
  ignoreSelf: false,
};

exports.help = {
  name: "mentionbot",
  type: "monitors",
  description: "Sends a message when bot is mentioned",
};