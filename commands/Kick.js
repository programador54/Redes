const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

message.delete() 
let embed = new Discord.RichEmbed()
.setTitle("<:dbd:737869762486337548> | Código:") 
.setDescription("```$nomention\n$kickMention\n$argsCheck[2;:x: Você não mencionou ninguém para eu expulsar!]\n$onlyPerms[kick;:x: Você não tem permissão suficiente para utilizar este comando!]\n$title[✅ | Usuário expulso!]\n$color[#FF0000]\n$description[\n**<@$mentioned[1]> Foi  expulso pelo moderador <@$authorID>!**\n]```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
