const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("🔰 Nome", message.guild.name, inline)
    .addField("💻 ID", message.guild.id, inline)
    .addField("👑 Dono", message.guild.owner, inline)
    .addField("🌎 Região", message.guild.region, inline)
    .addField("Verification Level", verlvl[message.guild.verificationLevel],inline)
    .addField("👥 Membros", ` ${message.guild.memberCount}`, inline)
    .addField(":medal: Cargos", message.guild.roles.size, inline)
    .addField(":speech_balloon: Canais", message.guild.channels.size, inline)
    .addField("📆 Entrei aqui em", message.member.joinedAt)

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}