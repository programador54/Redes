const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const eEmbed = new Discord.RichEmbed()
	.setColor('#ff80ed')
	.setTitle('Sobre a Dudinha 🌷')
  .setThumbnail('https://cdn.discordapp.com/attachments/623265409151402017/623265617037754398/a_741d9222075e0a1644468e04ed8b695d.gif')
	.addField('👑 Meu criador', "! ♔ corιɴɢα' ๖̷̶̷ ̷F.G.C 🔥#0272", true)
	.addField('<:node:623606982699647006> Versão do Bot', 'V 1.0.1', true)
  .addField('Total Users', `${client.users.size}`, true)
            .addField('Total Channels:', `${client.channels.size}`, true)
            .addField('Total Servers', Math.ceil(client.guilds.size), true)
	.setTimestamp()
	.setFooter('Estou em desenvolvimento.', 'https://i.imgur.com/wSTFkRM.png');

   message.channel.send(eEmbed)
}