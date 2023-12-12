// the structuring (importing package)
const {Client, IntentsBitField} = require('discord.js');

// initialize client
const client = new Client({
    // A set of permissions to get access to a set of events
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, //sending messages
        IntentsBitField.Flags.MessageContent, //reading messages
    ],
});

// listens when bot is ready
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`)
})

client.login(
    "MTE4MzkwNzk0OTUyMTkzMjM3OA.Gzx2zm.qJ9aDbodoKFyYyEFTfglfHiPVTYXei6uBwi9SY"
);


