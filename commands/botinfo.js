const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
const eEmbed = new Discord.RichEmbed()
	.setColor('#ff80ed')
	.setTitle('Dudinha 🌷')
	.setDescription(' <a:amor:616722891198955530> Olá, sou a Dudinha , uma bot focada em administração e  moderação.')
  .setThumbnail('https://cdn.discordapp.com/attachments/623265409151402017/623265617037754398/a_741d9222075e0a1644468e04ed8b695d.gif')
	.addField('👑 Meu criador', "! ♔ corιɴɢα' ๖̷̶̷ ̷F.G.C 🔥#0272", true)
	.addField(' Minha Linguagem', 'Ler mensagens, Escrever mensagens e Gerenciar mensagens', true)
	.addField(' <a:fogo:616722909477732373> Precisa de ajuda?', 'Use ``d!``ajuda para ver meus comandos.' , true) 
	.setTimestamp()
	.setFooter('Estou em desenvolvimento.', 'https://i.imgur.com/wSTFkRM.png');

   message.channel.send(eEmbed)
}