const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!say Hi!
  //Hi

  let botmessage = args.join(" ");
  message.delete().catch();
  let emb = new Discord.RichEmbed()
  .setAuthor(`➕ | Novo wiki, feito por: ${message.author.tag}`)
  .setDescription(`${botmessage}`) 
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9370DB")
  .setTimestamp() 
  .setFooter(`${message.guild.name}`, message.guild.iconURL)
  message.guild.channels.get('705751193598558220').send(emb)
} 
module.exports.help = {
  name: "say"
}