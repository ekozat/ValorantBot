// Run this file to register any new slash commands before running the main file
require('dotenv').config()

const environment = process.env.NODE_ENV || 'development'; // Default to development

const {REST, Routes} = require('discord.js');
const config = require(`../config_${environment}.js`);

// array of objects that represent a single command
const commands = [
    {
        name: 'valagents',
        description: 'Generates random valorant agent',
        options: [{
            name: 'agents',
            description: 'Number of agents',
            type: 3,
            min_value: 1,
            max_value: 5,
            required: true
        }]
    },
    {
        name: 'valgames',
        description: 'Generates a random game mode'
    },
    {
        name: 'valweapons',
        description: 'Generates a random weapon'
    },
];

// implement REST API into project
const rest = new REST ({version: '10'}).setToken(config.TOKEN);

// anonymous function
(async() => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
            {body: commands}
        );

        console.log('Slash commands were registered successfully!')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();