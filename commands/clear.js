const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:atento:674202798803517447> | <@${message.author.id}> Você precisa ter a permissão de \`\`Gerenciar mensagens\`\`! para usar este comando.`);
  if(!args[0]) return message.channel.send("<a:errado:630163775122833419> | **Coloque o número de mensagens que deseja apagar de (2-100)!**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:Lolizinha:633625831658487847> *Aguarde, estou apagando ${args[0]} menssagens!*`).then((msg) => {
    setTimeout(function() {
    msg.edit(`Chat limpo por  <@${message.author.id}>!`);
  }, 1000)});
});

}

module.exports.help = {
  name: "clear"
}