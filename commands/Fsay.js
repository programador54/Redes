const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("💻 | Comando - Say") 
.setDescription("```$nomention\n$deletecommand\n$message```")
.setColor("#995BBD") 

message.channel.send(embed).then(msg => msg.delete(18000)) 
} 
