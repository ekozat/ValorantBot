require('dotenv').config();

module.exports = {
    TOKEN: process.env.PROD_TOKEN,
    GUILD_ID: process.env.PROD_GUILD_ID,
    CLIENT_ID: process.env.PROD_CLIENT_ID
};