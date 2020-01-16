module.exports.run = (bot, message, args, discord) => {
    //message.channel.send(`Avatar:\n${message.author.avatarURL}`)
    let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    if (usr){
      message.channel.send({
        embed: {
          color: 3447003,
          title: `:frame_photo: ${usr.username} sua fotinho!`,
          description: `Clique [aqui](${message.mentions.users.first().avatarURL}) para baixar a imagem!`,
          image: {
            url: usr.avatarURL,
          },
      },
      })
    } else {
      message.channel.send(':x: Por favor, forneça um usuário para eu procurar!')
    }
  }

module.exports.help = {
  name: "avatar",
  usage: ``,
  information: ""
}