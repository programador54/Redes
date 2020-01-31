exports.run = async (client, message, args) => {
    if (!args.join(' ')) return message.channel.send({embed: {
        title: "<a:errado:630163775122833419> Uso incorreto do comando tente novamente!",
        description: "**Use o formato** ``x-vote`` (msg)",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();

    message.channel.send({embed: {
        title: args.join(' '),
        footer: {
            text: `Votação iniciada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react(client.emojis.get("630163775122833419"));
        message.react(client.emojis.get("630163812678631434"))
    .then(reaction => console.log(typeof reaction));
    });
};