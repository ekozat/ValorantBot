const { fetchData } = require('./valorant-api.js');

// Handle the data returned by the API
let dataLength;
let characters = [];
let icons = [];
let randomIndex;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

fetchData()
  .then(jsonData => {
    if (Array.isArray(jsonData.data)) {
        dataLength = jsonData.data.length;
        // Iterate through the array of agents
        for (let i = 0; i < dataLength; i++) {
            const agent = jsonData.data[i];
            characters.push(agent.uuid);
            icons.push(agent.displayIcon);
        }

        // RNG logic
        randomIndex = getRandomInt(dataLength);
        console.log("Random Character UUID:", characters[randomIndex]);
        console.log("Corresponding Icon:", icons[randomIndex]);
    }
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
