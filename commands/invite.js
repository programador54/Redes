const Discord = module.require('discord.js');


module.exports.run = async (bot, message, args) => {

  let invite = new Discord.RichEmbed()

          .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/TyM8AkG", true)
          .addField("__**" + "Bot Invite Link: " + "**__", "https://discordapp.com/oauth2/authorize?client_id=353154808078794752&scope=bot&permissions=2146958591", false)


          .setColor("0x#FF0000")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "invite"
}