const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:atento:674202798803517447> | Desculpe, <@${message.author.id}>. Para utilizar este comando é necessário que você tenha a permissão de \n\`\`GERENCIAR MENSAGENS\`\`!`).then(msg => msg.delete(15000));
  let botmessage = args.join(" ");
  message.delete().catch();
  let emb = new Discord.RichEmbed()
  .setAuthor(`➕ | Novo wiki, feito por: ${message.author.tag}`)
  .setDescription(`${botmessage}`) 
  .setColor("#9370DB") 
  message.guild.channels.get('705542186032300032').send(emb);
}

module.exports.help = {
  name: "say"
}