exports.run = (client, msg) => {
    let args = msg.content.split(` `).slice(1);

    if (args[0] === "plus") {
      let numere = args.slice(1)
      if (numere.length < 2) return msg.channel.send(`-Numbers is a required argument. (Minim 2 numbers)`, {code: "diff"})
      let numArray = numere.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p+c);
      msg.channel.send(`**Math Result** \`${numere.join(`+`)}\` = **\`${total}\`**`)
    } else if (args[0] === "minus") {
      let numere = args.slice(1)
      if (numere.length < 2) return msg.channel.send(`-Numbers is a required argument. (Minim 2 numbers)`, {code: "diff"})
      let numArray = numere.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p-c);
      msg.channel.send(`**Math Result** \`${numere.join(`-`)}\` = **\`${total}\`**`)
    } else if (args[0] === "add") {
      let numere = args.slice(1)
      if (numere.length < 2) return msg.channel.send(`-Numbers is a required argument. (Minim 2 numbers)`, {code: "diff"})
      let numArray = numere.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p*c);
      msg.channel.send(`**Math Result** \`${numere.join(`\*`)}\` = **\`${total}\`**`)
    } else if (args[0] === "reduce") {
      let numere = args.slice(1)
      if (numere.length < 2) return msg.channel.send(`-Numbers is a required argument. (Minim 2 numbers)`, {code: "diff"})
      let numArray = numere.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p/c);
      msg.channel.send(`**Math Result** \`${numere.join(`/`)}\` = **\`${total}\`**`)
    } else {
        msg.channel.send(`@Missing a required option:
# plus, minus, add, reduce`, {code: "py"})
    }
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
  name: "math",
  description: "Math !",
  usage: "",
  usageDelim: "",
};