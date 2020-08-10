const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.guild.fetchBans().then(bans => {
    bans.forEach(banInfo => {
      message.guild.members.unban(banInfo.user);
    });
    message.channel.send(`Unbanned **${bans.size}** users`)
  })
}
