const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
  
  let bicon = client.user.displayAvatarURL;
  
  let embed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle("<a:fogo:616722909477732373> Meus comandos são:")
  .setThumbnail(bicon)
  .setDescription("\n🔨» **Básicos** Mostra os comandos básicos do bot.\n👮» **Moderação** Mostra os comandos de moderação do bot.")
  
  message.channel.send({embed: embed}).then(msg=>{
            msg.react('👮');
        
  const basicosfilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
  const basicos = msg.createReactionCollector(basicosfilter, { time: 60000 }); 

        basicos.on('collect', r => {
        const a = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("Comandos de Moderação")
                .setDescription("Meus comandos de moderação:.\n\n``d!say`` (mensagem) » Faça eu falar alguma coisa!.\n``d!clear`` (QuantasMensagens) » Limpa o chat do canal de texto atual..\n``d!ajuda`` Mostra a central de ajuda.\n")
               .setFooter(`${client.user.username}`, client.user.avatarURL);
                msg.edit(a);
            })
  
            msg.react('🔨');
        
  const moderaçãofilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
  const moderação = msg.createReactionCollector(moderaçãofilter, { time: 60000 }); 

        moderação.on('collect', r => {
        const b = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("Comandos Básicos")
                .setDescription("Mostra todos comandos básicos do bot.\n\n``d!ping`` Mostra a latência do BOT e da API.\n``d!serverinfo`` Mostra informações do Servidor.\n``d!ajuda`` Mostra a central de ajuda.\n")
                .setFooter(`${client.user.username}`, client.user.avatarURL);
                msg.edit(b);
            })
  })
}
