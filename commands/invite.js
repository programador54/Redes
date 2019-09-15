const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  let invite = new Discord.RichEmbed()

          .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/TyM8AkG", true)
          .addField(' <a:seta:617051958800547877> Me adicione em seu servidor:', '[clique aqui](https://discordapp.com/oauth2/authorize?client_id=622555910056706089&scope=bot&permissions=2146958847)', true)


          .setColor("0x#FF0000")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "invite"
}