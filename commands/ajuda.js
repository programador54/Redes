const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
  
  let bicon = client.user.displayAvatarURL;
  
  let embed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setTitle("<a:fogo:616722909477732373> Meus comandos são:")
  .setThumbnail(bicon)
  .setDescription("🔨» ``Moderação`` Mostra os comandos de moderação do bot.")
  
  message.channel.send({embed: embed}).then(msg=>{
            msg.react('🔨');
        
  const basicosfilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
  const basicos = msg.createReactionCollector(basicosfilter, { time: 60000 }); 

        basicos.on('collect', r => {
        const a = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("Comandos de Moderação")
                .setDescription("Mostra todos comandos de moderação do bot.\n\n``d!``(mensagem) » Faça eu falar alguma coisa!.\n``d!clear``(QuantasMensagens) » Limpa o chat do canal de texto atual..\n``/help`` Mostra a central de ajuda.\n")
                .setFooter(`${client.user.username}`, client.user.avatarURL);
                msg.edit(a);
            })
    })
}