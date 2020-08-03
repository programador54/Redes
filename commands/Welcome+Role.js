const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

message.delete() 
let embed = new Discord.RichEmbed()
.setTitle("<:dbd:737869762486337548> | Código:")
.addField("Gatilho", '```$onJoined[ID DO CANAL DE BEM VINDO]```') 
.addField("Comando", "\n\n```$nomention\n$title[👋 Seja Bem-vindo(a)!] \n$addReactions[👋]\n$color[#FF0000]\n$description[\nOlá <@$authorID>, obrigado por entrar em nosso servidor, agora temos **$membersCount** membros!] \n$thumbnail[$authorAvatar]\n]\n$addTimestamp\n$giveRole[$authorID;ID DO CARGO QUE VOCE QUER DA PARA QUEM ENTRAR]\n$image[https://media1.tenor.com/images/78c07c30bf3c7af7fc784da20cd6dbf8/tenor.gif]```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
