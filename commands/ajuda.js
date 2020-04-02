const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()

  .setField("\nMeus comandos são:", '`l.say` - Faz o bot dizer por você no canal do texto\n`l.clear` - Apaga mensagens no canal de texto.\n`l.avatar` - Mostra o avatar do membro mencionado.')
  .setFooter(`${message.guild.name}`, message.guild.iconURL)
  .setTimestamp()
  message.channel.send(embed)
}