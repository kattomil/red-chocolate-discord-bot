exports.run = (client, msg) => {
	msg.channel.send(`\`\`\`ml\nBot Owner: 10\nGuild Owner: 9\nAdministrator "Permission": 8\nManage Guild "Permission": 7\nKick Members "Permission": 6\nBan Members "Permission": 5\nManage Channels "Permission": 4\nManage Messages "Permission": 3\nManage Roles "Permission": 2\`\`\``)
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["permissionsl", "permissionslist"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "permlist",
  description: "List the level permissions !",
  usage: "",
  usageDelim: "",
};