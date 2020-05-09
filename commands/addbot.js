const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

      
        message.delete().catch()
        let user2 = message.guild.members.get("681145371527086098")
        let dUser = message.guild.members.get("555450363789180958")
        let splitarg = args.join(" ").split(" / ")
        let titulo = splitarg[0]
        let anuncio = splitarg[1]

        if(!titulo){
            message.reply("** <a:setinha:630093687036313641> Use o formato:\n ``l.addbot <ID do bot> / <descrição>``**")
            return
        }

        if(!anuncio){
            message.reply("** <a:setinha:630093687036313641> Use o formato:\n ``l.addbot <ID do bot> / <descrição>**")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("🔔 | Novo pedido!") 
        .setThumbnail(message.author.avatarURL) 
        .addField('💻 ID do Bot:', `\`\`${titulo}\`\``) 
        .addField('📋 Descrição:', `**${anuncio}**`)
        .addField(':link: Link do Bot:', `**[Clique aqui para adicionar o bot](https://discord.com/api/oauth2/authorize?client_id=${titulo}&permissions=1647692865&scope=bot)**`)
        .setFooter(`Enviado por: ${message.author.tag}`, message.author.avatarURL) 
        .setTimestamp();
        
        user2.send(anuncioembed) 
        dUser.send(anuncioembed)
      message.channel.send('✅ | **Bot enviado para ser adicionado, aguarde a análise do seu bot para saber se ele é seguro**!').then(msg => msg.delete(1500))
    }
}