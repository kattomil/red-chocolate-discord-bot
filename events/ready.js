exports.run = (client) => {
    let games = [
      `On ${client.guilds.size} Servers | b!invite`,
      `With ${client.users.size} users | b!invite`,
      `with you :D | b!help`,
      `with ${client.users.get(`238711670057336842`).username}#${client.users.get(`238711670057336842`).discriminator} | b!help`,
      `with my developers | b!help ~ b!invite`,
      `with ${client.users.get(`323512133411143682`).username}#${client.users.get(`323512133411143682`).discriminator}  | b!help`,
      `with ${client.users.get(`253544423110082589`).username}#${client.users.get(`253544423110082589`).discriminator}  | b!help`,
      `with ${client.users.get(`195223544186142727`).username}#${client.users.get(`195223544186142727`).discriminator}  | b!help`,
      `b!invite <3 b!help`,
      `b!support <3 b!help`,
      `b!support <3 b!invite`,
      `on my site | b!invite`,
      `with your boobs :3 | b!help`,
  ]
      setInterval(() => {
        client.user.setGame(games[Math.floor(Math.random() * games.length)], `https://www.twitch.tv/emilr0`)
  }, 30000)
}