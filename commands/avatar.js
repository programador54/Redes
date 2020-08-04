const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
message.delete() 
let embed = new Discord.RichEmbed()
.setTitle("<:dbd:737869762486337548> | Código:") 
.setDescription("```$nomention\n$title[🖼️ | Avatar do usuário: $username[$mentioned[<]]!]\n$deletecommand\n$argsCheck[1;:x: | Você não mencionou ninguém para ver a foto do perfil!]\n$image[$userAvatar[$mentioned[<]]]\n$addTimestamp\n$footer[Solicitado por $username]\n$footerIcon[$authorAvatar] \n$description[Clique  [aqui]($userAvatar[$mentioned[1]]) para baixar a imagem ]\n$image[$userAvatar[$mentioned[1]]?size=2048]\n$color[#8A2BE2]```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
