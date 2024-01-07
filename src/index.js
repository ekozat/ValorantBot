require('dotenv').config();

const environment = process.env.NODE_ENV || 'dev'; // Default to development
const config = require(`../config_${environment}.js`);

// Handle the data returned by the API
let dataLength;
let characters = [];
let icons = [];
let randomIndex;

function getRandomInt(max, excludedNumbers) {
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * max);
    } while (excludedNumbers.includes(randomNum));

    return randomNum;
}

// the structuring (importing package)
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');
const { fetchAgentData, fetchGameData } = require('./valorant-api.js');

// Fetch API data
fetchAgentData()
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

fetchGameData()
.then(jsonData => {
    if (Array.isArray(jsonData.data)) {
        dataLength = jsonData.data.length;
        // Iterate through the array of agents
        for (let i = 0; i < dataLength; i++) {
            const game = jsonData.data[i];

            console.log(game.displayName);
            
            // if (agent.isPlayableCharacter == true){
            //     characters.push(agent.uuid);
            //     icons.push(agent.displayIcon);
            // }
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

    // console.log(commands[0].name);

    if (interaction.commandName == 'valagents'){
        // Get the number inputted
        let agentNum = interaction.options.get('agents').value;

        if (agentNum <= 5 && agentNum >= 1){
            let embeds = [];
            let excludedNum = [];

            for (let i = 0; i < agentNum; i++){
                // RNG logic
                randomIndex = getRandomInt(characters.length, excludedNum);

                // test values
                console.log(icons[randomIndex]);
                console.log(randomIndex);

                // removes duplicates
                excludedNum.push(randomIndex);

                // const embed = new EmbedBuilder().setImage(icons[randomIndex]);
                embeds.push(new EmbedBuilder().setImage(icons[randomIndex]).setColor('#2F3136'));

                // combinedAgents.push(embed);
            }
            
            interaction.reply({ embeds});

            // Output icon to the player
            // interaction.reply(images);
        }
        else{
            interaction.reply('Please input an agent range from 1-5.')
        }
    }

    if (interaction.commandName == 'valgames'){
        interaction.reply('hi');
    }
})

// if (interaction.commandName == 'valbot'){
//     // Get the number inputted
//     let agentNum = interaction.options.get('agents').value;
//     console.log(agentNum)

//     if (agentNum <= 5 && agentNum >= 1){
//         // RNG logic
//         randomIndex = getRandomInt(characters.length);

//         // remove duplicates
//         console.log(icons[randomIndex]);
//         console.log(randomIndex);
            
//         interaction.reply(icons[randomIndex]).then(() => {
//             console.log(interaction.replied);
            
//             for (let i = 1; i < agentNum; i++){
//                 if (interaction.replied){
//                     randomIndex = getRandomInt(characters.length);
//                     interaction.followUp(icons[randomIndex]);
//                 }
//             }
//         });
//     }
// }

// logs all the messages a user sends
// client.on('messageCreate', (msg) =>{
//     console.log(msg.content);
// })

client.login(config.TOKEN);



