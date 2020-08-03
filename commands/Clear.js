const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.delete() 
let embed = new Discord.RichEmbed()
.setTitle(`<:dbd:737869762486337548> | Código:`) 
.setDescription("```$nomention $deletecommand\n$clear[$message]\n$argsCheck[>1;❌ Você não colocou a quantidade de mensagens a ser deletada!]\n$color[#FF0000] \n$description[✅ <@$authorID> Apagou $message mensagens!] \n$onlyAdmin[❌ Você não tem permissão suficiente para utilizar este comando! ]```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`$message.author.tag`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(18000)) 
} 
