const agentUrl = 'https://valorant-api.com/v1/agents';
const gameUrl = 'https://valorant-api.com/v1/gamemodes';
const weaponUrl = 'https://valorant-api.com/v1/weapons';
// no API key needed - unofficial

const headers = new Headers({
  'Content-Type': 'application/json',
});

const requestOptions = {
  method: 'GET', 
  headers: headers,
  // Other options like body for POST requests, etc.
};

function fetchAgentData() {
    return new Promise((resolve, reject) => {
        fetch(agentUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // first .then is conversion to json
                return response.json();
            })
            .then(data => {
                // resolve the promise
                resolve(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                reject(error);
            });
    });
}

function fetchGameData() {
    return new Promise((resolve, reject) => {
        fetch(gameUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // first .then is conversion to json
                return response.json();
            })
            .then(data => {
                // resolve the promise
                resolve(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                reject(error);
            });
    });
}

function fetchWeaponData() {
    return new Promise((resolve, reject) => {
        fetch(weaponUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // first .then is conversion to json
                return response.json();
            })
            .then(data => {
                // resolve the promise
                resolve(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
                reject(error);
            });
    });
}

// Export the fetchData function to make it accessible to other files
module.exports = {
    fetchAgentData: fetchAgentData,
    fetchGameData: fetchGameData,
    fetchWeaponData: fetchWeaponData,
};