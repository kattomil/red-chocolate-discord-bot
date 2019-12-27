exports.run = (client, msg, [...text]) => {
    
    text = msg.content
         .replace(/a/gi, "𝖆")
         .replace(/b/gi, "𝖇")
         .replace(/c/gi, "𝖈")
         .replace(/d/gi, "𝖉")
         .replace(/e/gi, "𝖊")
         .replace(/f/gi, "𝖋")
         .replace(/g/gi, "𝖌")
         .replace(/h/gi, "𝖍")
         .replace(/i/gi, "𝖎")
//𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟
         .replace(/j/gi, "𝖏")
         .replace(/k/gi, "𝖐")
         .replace(/l/gi, "𝖑")
         .replace(/m/gi, "𝖒")
         .replace(/n/gi, "𝖓")
         .replace(/o/gi, "𝖔")
         .replace(/p/gi, "𝖕")
         .replace(/q/gi, "𝖖")
         .replace(/r/gi, "𝖗")
//𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟
         .replace(/s/gi, "𝖘")
         .replace(/t/gi, "𝖙")
         .replace(/u/gi, "𝖚")
         .replace(/v/gi, "𝖛")
         .replace(/w/gi, "𝖜")
         .replace(/x/gi, "𝖝")
         .replace(/y/gi, "𝖞")
         .replace(/z/gi, "𝖟")
//₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₀
         .replace(/1/gi, "₁")
         .replace(/2/gi, "₂")
         .replace(/3/gi, "₃")
         .replace(/4/gi, "₄")
         .replace(/5/gi, "₅")
         .replace(/6/gi, "₆")
         .replace(/7/gi, "₇")
         .replace(/8/gi, "₈")
         .replace(/9/gi, "₉")
         .replace(/0/gi, "₀")
        msg.channel.send("**\`\`\`" + text.substring(15) + "\`\`\`**")
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
  name: "convert",
  description: "Convert text in awesome text",
  usage: "<Text:str> [...]",
  usageDelim: " ",
};