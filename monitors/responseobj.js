exports.run = (client, msg) => {
    let responseObject = {
    "(╯°□°）╯︵ ┻━┻": "┬─┬﻿ ノ( ゜-゜ノ)",
  };
  
  if(responseObject[msg.content]) {
		if (msg.channel.type === "dm") return;
      msg.channel.send(responseObject[msg.content]);
  }

  if(msg.content.toLowerCase().includes(`ayy`)) {
		if (msg.channel.type === "dm") return;
      msg.channel.send(`lmao :joy:`)
    }
}

exports.conf = {
  enabled: true,
  ignoreBots: false,
  ignoreSelf: false,
};

exports.help = {
  name: "responseobj",
  type: "monitors",
  description: "Response Object (ayy / lmao, tableflip / unflip)",
};