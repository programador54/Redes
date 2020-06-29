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

  if (message.content.includes('Linux'||'linux')) { //if it contains an invite link

    message.react("727088200211759155") //delete the message

      
  }

})


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

    let statuses = [`Minha prefix é l-ajuda!`, `Linux ON 🐧`, `Segurança e Conhecimento!`];
   
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
