const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require('discord.js');
const fs = require("fs")
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
return message.channel.send(
      "Olá " +
        `<@${message.author.id}>` +
        ", meu prefixo é `l-`"
    );
  } 
if(!message.content.startsWith(config.prefix)) return;
let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})


client.on('message', (message) => { //whenever a message is sent
  if(message.author.bot) return;
  if (message.content.includes('Linux'||'linux')) { //if it contains an invite link

    message.react("727088200211759155") //delete the message
const filter = (reaction, user) => {
    return ['727088200211759155'].includes(reaction.emoji.id) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.id === '727088200211759155') {
            message.channel.send(`<a:okok:740291543058874409> | <@${message.author.id}> Uau, Reação inesperada!`).then(m => m.delete(17000));
        }
    })
  }
})

client.on('message', message => {
if(!message.author === "742227589854134452") return message.channel.send(':x: Este comando não pode ser utilizado por qualquer um!').then(m => m.delete(15000))
    if(message.content == 'g-unbanGeral'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                message.channel.send(`<a:okok:740291543058874409> | <@${message.author.id}> Todos os usuários desse servidor terá seu ban retirado!`).then(m => m.delete(18000));
                message.guild.unban(user);
            });
        });
    }
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
        return console.log("[NeotiDev Sample-Bot] There aren't any events!");
    }
  jsfile.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});



client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let statuses = [`Minha prefix é g-comandos`, `Linux ON 🐧`, `Segurança e Conhecimento!`];
   
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        
        client.user.setPresence({
            game: {
                name: status,
              type: "STREAMING"
            },
            status: 'online'
        });
    }, 10000)

    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
  })

client.login(config.token)
