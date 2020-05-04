const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode usar esse comando.")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let titulo = splitarg[0]
        let anuncio = splitarg[1]

        if(!titulo){
            message.reply("** <a:setinha:630093687036313641> Use o formato:\n ``l.addbot <ID do bot> / <anuncio>``**")
            return
        }

        if(!anuncio){
            message.reply("** <a:setinha:630093687036313641> Use o formato:\n ``x-anunciar <ID do bot> / <anuncio>**")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .addField(`${titulo}`, `**${anuncio}**`)
        .setFooter(`Anuncio feito por ${message.author.tag}`)
        .setTimestamp();

        message.channel.send(anuncioembed)
    }
}