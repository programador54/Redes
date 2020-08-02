const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!say Hi!
  //Hi

  let botmessage = args.join(" ");
if(!botmessage) return message.channel.send(":x: | Você não informou nenhum texto para ser enviado!").then(m => m.delete(15000))
  message.delete().catch();
  let emb = new Discord.RichEmbed()
  .setAuthor(`➕ | Novo wiki, feito por: ${message.author.tag}`)
  .setDescription(`${botmessage}`) 
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9370DB") 
  .setFooter(`(🔼) Gostou | (🔽) Não gostou`)
  message.channel.send("✅ | **Sua wiki foi enviada com sucesso**!").then(msg => msg.delete(15000))
  message.guild.channels.get('713393242913243146').send(emb).then(async function (message) {
		await message.react("🔼")
		await message.react("🔽")
  }) 
                        
}

module.exports.help = {
  name: "say"
}
