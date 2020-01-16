const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<a:errado:630163775122833419> | <@${message.author.id}> **Você não tem autorização para usar este comando!**`);
  message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.reply("<a:Seta:640505419302830090> **_O canal foi desbloqueado com sucesso!_ Use  ``$!lock``  para travar!**");
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        })
}