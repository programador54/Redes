const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:errado:630163775122833419> | <@${message.author.id}>**Você não tem autorização para usar este comando!**`);
  message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.reply("**<a:Seta:640505419302830090> Este canal foi bloqueado com sucesso! *Use:* ``$!unlock``  para destravar!**");
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        })
}