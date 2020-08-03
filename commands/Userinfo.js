const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle(":dbd: | Código:") 
.setDescription("```$nomention\n$userInfo[\n📚 **Nome Do Membro**:\n`{username}`\n💻 ** ID do Discord**:\n{ID}\n👥 **Discriminador**:\n#{discriminator}\n📆 Criado em:\n$creationDate[$mentioned[1]]\n]\n$argsCheck[1;Mencione alguém para saber sobre!]\n$color[#0000FF]\n$footer[Informações sobre o usuário!]```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
