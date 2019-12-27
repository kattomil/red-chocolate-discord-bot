exports.conf = {
  enabled: true,
  priority: 10
};

var bl = require(`../bl.json`);
var control = bl.list

exports.run = (client, msg, cmd) => {
  if (!control.includes(msg.author.id)) {
    return false
  }
    return "**It seems like you are on blacklist, you can't use my commands !**"
  }