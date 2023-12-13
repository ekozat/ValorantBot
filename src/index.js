require('dotenv').config();

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

client.on('interactionCreate', (interaction) => {
    // function only going to run if chat input is true
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName == 'valrng'){
        interaction.reply('hey');

        // add the rng for the valorant character
    }
    console.log(interaction.commandName);
})

// logs all the messages a user sends
// client.on('messageCreate', (msg) =>{
//     console.log(msg.content);
// })

client.login(process.env.TOKEN);



