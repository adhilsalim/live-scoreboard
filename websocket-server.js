const WebSocket = require('ws');

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Store teams data
let teams = [];

// Broadcast teams to all connected clients
function broadcastTeams() {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'teamUpdate',
                teams: teams.sort((a, b) => b.score - a.score)
            }));
        }
    });
}

wss.on('connection', (ws) => {
    // Send current teams on connection
    ws.send(JSON.stringify({
        type: 'teamUpdate',
        teams: teams.sort((a, b) => b.score - a.score)
    }));

    // Handle incoming messages
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'addTeam':
                teams.push({
                    name: data.name,
                    score: 0
                });
                teams.sort((a, b) => a.name.localeCompare(b.name));
                broadcastTeams();
                break;

            case 'updateScore':
                const teamIndex = teams.findIndex(t => t.name === data.name);
                if (teamIndex !== -1) {
                    teams[teamIndex].score = data.score;
                    teams.sort((a, b) => b.score - a.score);
                    broadcastTeams();
                }
                break;

            case 'deleteTeam':
                teams = teams.filter(t => t.name !== data.name);
                broadcastTeams();
                break;
        }
    });
});

console.log('WebSocket server running url ws://localhost:8080');