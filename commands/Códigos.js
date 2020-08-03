const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<a:Loanding:710604585399615498>  | Códigos DBD cadastrados no meu sistema:") 
.setDescription("g-`Say` » Comando do bot falar no canal de Texto.\ng-`Clear` » Comando para limpar mensagens de um canal de texto.\ng-Avatar » Comando para ver a foto de um usuário.")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`${message.author.tag}`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(21000)) 
} 
