const discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log(client.user.username + " is online.");
   });

client.on('messageCreate', message => {

    if (message.content === "!rp") {
        console.log();
    fetch('https://api.tinyfox.dev/img?animal=wah&json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
    const embed = new discord.MessageEmbed()
    .setColor('#E54B4B')
    .setImage('https://api.tinyfox.dev/' + data.loc)
    .setTimestamp()
    message.channel.send({ embeds: [embed] });
    })
  }
});

client.login('ENTER-YOUR-OWN-TOKEN');