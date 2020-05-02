const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!say Hi!
  //Hi

  let botmessage = args.join(" ");
  message.delete().catch();
  let emb = new Discord.RichEmbed()
  .setAuthor(`➕ | Novo wiki, feito por: ${message.author.tag}`)
  .setDescription(`${botmessage}`) 
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9370DB") 
  .setFooter(`(🔼) Gostou | (🔽) Não gostou`)
  message.guild.channels.get('705748113587175436').send(emb).then(async function (message) {
		await message.react("🔼")
		await message.react("🔽")
  }) 
                        
}

module.exports.help = {
  name: "say"
}