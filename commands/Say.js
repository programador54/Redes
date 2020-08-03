const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:dbd:737869762486337548> | Código:") 
.setDescription("```$nomention\n$deletecommand\n$message```")
.setColor("#995BBD") 
.setTimestamp() 
.setFooter(`$message.author.tag`, message.author.avatarURL) 

message.channel.send(embed).then(msg => msg.delete(18000)) 
} 
