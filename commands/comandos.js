const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

message.delete() 
let embed = new Discord.RichEmbed()
.setTitle("<a:Loanding:710604585399615498>  | Códigos DBD cadastrados no meu sistema:") 
.setDescription("g-`say` » Comando do bot falar no canal de Texto.\ng-`clear` » Comando para limpar mensagens de um canal de texto.\ng-`avatar` » Comando para ver a foto de um usuário.\ng-`userinfo` » Comando para ver informações de um usuário.\ng-`welcome` » Comando de boas vindas simples.\ng-`welcome2` » Comando de boas vindas com imagem e que adiciona cargo ao membro que entrou.")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
