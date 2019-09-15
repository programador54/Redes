const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  let invite = new Discord.RichEmbed()

          .addField("Adicione a Dudinha no seu servidor! <a:amor:616722891198955530>", "Sou a Dudinha uma bot focada em administração e moderação.", true)
          .addField(' <a:seta:617051958800547877> Me adicione em seu servidor:', '[clique aqui](https://discordapp.com/oauth2/authorize?client_id=622555910056706089&scope=bot&permissions=2146958847)', true)


          .setColor("0x#FF0000")

  message.channel.send({embed: invite});
}

module.exports.help = {
    name: "invite"
}