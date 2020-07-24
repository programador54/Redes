const Discord = require("discord.js") 
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
let bal = db.fetch(`canal_${message.guild.id}`) 
  if (bal == null) bal = '<:desativou:735991072596951141> | A função apagar canais está desativada.' 
  if (bal > 0) bal = '<:ativou:735990850932441219> | A função apagar canais está ativada.' 
  let bank = await db.fetch(`cargo_${message.guild.id}`)

  if (bank === null) bank = '<:desativou:735991072596951141> | A função apagar cargos está desativada.'
if (bank > 0) bank = '<:ativou:735990850932441219> | A função apagar cargos está ativada.' 

  
  let guild = message.guild.id
  const embed = new Discord.RichEmbed() 
 .setDescription(`${bal}\n${bank}`) 
 .setColor("#FF00FF") 
  message.channel.send(embed).then(async function (message) {

   message.react('1️⃣').then(() => message.react('2️⃣')).then(() => message.react('3️⃣')).then(() => message.react('4️⃣')).then(() => message.react('❌'))

    const filter = (reaction, user) => {

    return ['1️⃣', '2️⃣', '3️', '4️⃣', '❌'].includes(reaction.emoji.name) && user.id !== message.author.id;

};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })

    .then(collected => {

        const reaction = collected.first();

        if (reaction.emoji.name === '1️⃣') {
        let bal1 = db.fetch(`canal_${message.guild.id}`) 
        let bank1 = db.fetch(`cargo_${message.guild.id}`) 
        if (bal1 === null) bal1 = '<:desativou:735991072596951141> | A função apagar canais está desativada.'
        if (bal1 > 0) bal1 = '<:ativou:735990850932441219> | A função apagar canais está ativada.' 
        if (bank === null) bank = '<:desativou:735991072596951141> | A função apagar cargos está desativada.' 
        if (bank1 > 0) bank1 = '<:ativou:735990850932441219> | A função apagar cargos está ativada.' 

   
        const embed5 = new Discord.RichEmbed() 
         .setDescription(`${bal1}\n${bank1}`) 
         message.edit(embed5) 
          db.set(`canal_${message.guild.id}`, message.guild.id) 
         }else if (reaction.emoji.name === '2️⃣') {
          const embed7 = new Discord.RichEmbed() 
         .setDescription(`${bal} \n${bank}`) 
          message.edit(embed)
           db.set(`cargo_${message.guild.id}`, message.guild.id) 
         } 
 })
   })
 }