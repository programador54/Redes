const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("_Informe um número de_ (0-100).");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:carregando:616924662227533833> _Apagando ${args[0]} menssagens_...`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}