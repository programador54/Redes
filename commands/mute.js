const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send(`:x: | <@${message.author.id}>, Você não mencionou ninguém para eu mutar!`);
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | <@${message.author.id}>, Não foi possível punir o usuário mencionado, verifique se você tem autorização para usar este comando!`);
  let muterole = message.guild.roles.find(`name`, "muted");
  let reason = args.slice(2).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.channel.send(`:x: | <@${message.author.id}>, Você precisa colocar o tempo da punição!`);

  await(tomute.addRole(muterole.id));
  message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle("<a:Vereficado:630163444733313048> Membro mutado com sucesso!")
          .addField("👤 Membro mutado:", `${tomute.user.tag}`)
          .addField("<:coroa:630377866449649712> Autor da punição:", `${message.author.tag}`)
          .addField("⏰ Mutado por:", `${ms(ms(mutetime))}`)
          .addField(":clipboard: Motivo da punição:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("#9370DB").setTimestamp()

          message.channel.send(pEmbed);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`✅ | <@${tomute.id}>, foi desmutado(a), agora ele falará coisas interessantes para não acabar sendo punido novamente!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
