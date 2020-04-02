const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setField("Meu"'`l.say` - Faz o bot dizer no canal do texto\n`l.clear` - Apaga mensagens no canal de texto.\n`l.avatar` - Mostra o avatar do membro mencionado.')
  message.channel.send(embed)
}