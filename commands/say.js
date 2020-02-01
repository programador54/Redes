const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports.run = async (bot, msg, args) => {
  if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {


      if(!msg.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      msg.delete().catch();
      msg.channel.send(sayMessage);
      
      talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }

}

module.exports.help = {
  name: "say"
}