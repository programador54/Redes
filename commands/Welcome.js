const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle(`:dbd: | Código:`) 
.setDescription("```**Gatilho**: $onJoined[ ID DO CANAL DE BEM VINDO]\n\nComando:\n$nomention\n$description[Seja bem vindo **$username** ao servidor, agora temos **$membersCount** membros!] ```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`$message.author.tag`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(18000)) 
} 
