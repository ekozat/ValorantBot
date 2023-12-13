// Run this file to register any new slash commands before running the main file
require('dotenv').config()

const {REST, Routes} = require('discord.js');

// array of objects that represent a single command
const commands = [
    {
        name: 'valrng',
        description: 'Generates random valorant agent',
    },
];

// implement REST API into project
const rest = new REST ({version: '10'}).setToken(process.env.TOKEN);

// anonymous function
(async() => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        );

        console.log('Slash commands were registered successfully!')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();