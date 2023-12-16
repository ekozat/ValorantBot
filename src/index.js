require('dotenv').config();
        
// Handle the data returned by the API
let dataLength;
let characters = [];
let icons = [];
let randomIndex;

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// the structuring (importing package)
const {Client, IntentsBitField} = require('discord.js');
const { fetchData } = require('./valorant-api.js');

// Fetch API data
fetchData()
.then(jsonData => {
    if (Array.isArray(jsonData.data)) {
        dataLength = jsonData.data.length;
        // Iterate through the array of agents
        for (let i = 0; i < dataLength; i++) {
            const agent = jsonData.data[i];
            
            if (agent.isPlayableCharacter == true){
                characters.push(agent.uuid);
                icons.push(agent.displayIcon);
            }
        }

        // Test output
        // console.log("Random Character UUID:", characters[randomIndex]);
        // console.log("Corresponding Icon:", icons[randomIndex]);
    }
    
})
.catch(error => {
    console.error('Error:', error);
});

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

    if (interaction.commandName == 'valbot'){

        // RNG logic
        randomIndex = getRandomInt(characters.length);

        // Output icon to the player
        interaction.reply(icons[randomIndex]);
    }
    // console.log(interaction.commandName);
})

// logs all the messages a user sends
// client.on('messageCreate', (msg) =>{
//     console.log(msg.content);
// })

client.login(process.env.TOKEN);



