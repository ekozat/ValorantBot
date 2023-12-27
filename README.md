## Starting Out
Need to run register-commands.js separately as of now, to instantiate the slash commands before npm starting.
Do not forget to edit the .env to have all proper tokens configured.npm install node-cmd --save;

## Compilation
To do it manually: `node src/index.js`
- When making changes to the bot, we would have to run this command every time to install manually

Better way: `nodemon`
- need to install using npm (`npm install -g nodemon`)
- `-g` flag should install it globally on device
- Am not using this method currently

Keeping an instance alive in the back-end processing:
- `pm2 list` to show all processes
- `pm2 start ./startscript.js` in order to start an instance on production
- `pm2 save` to keep it awake
- Use --update-env to update environment variables

