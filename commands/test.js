const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const embed = new Discord.RichEmbed()
  .setAuthor('Solicitado por:' + message.author.username, message.author.avatarURL)
  .addField("\nMeus comandos são:", '`l.say` - Faz o bot dizer por você no canal do texto\n`l.clear` - Apaga mensagens no canal de texto.\n`l.avatar` - Mostra o avatar do membro mencionado.')
  .setFooter(`${message.guild.name}`, message.guild.iconURL)
  .setTimestamp()
  message.channel.send(embed).then(function (message) {
    message.react("▶️")
    const collector = message.createReactionCollector((reaction, user) => 
    user.id !== message.author.id &&
    reaction.emoji.name === "◀" ||
    reaction.emoji.name === "▶" ||
    reaction.emoji.name === "❌"
).once("collect", reaction => {
    const chosen = reaction.emoji.name;
    if(chosen === "◀"){
        // Prev page
    }else if(chosen === "▶"){
        // Next page
      const embed2 = new Discord.RichEmbed()
      .SetDescription('Teste')
      message.channel.send(embed2) 
    }else{
        // Stop navigating pages
    }
    collector.stop();
});
  })
}