# Live Scoreboard

A real-time local web application for managing and displaying live competition scores using WebSocket, JavaScript, and HTML5.

## Features

- Real-time score tracking
- Add and remove teams dynamically
- Instant updates across client and server screens
- Automatic sorting of teams by score
- Simple, intuitive interface

## Technologies

- WebSocket
- JavaScript
- HTML5
- Node.js

## Prerequisites

- Node.js (v14 or later)
- Web Browser (Chrome, Firefox, Safari, Edge)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/adhilsalim/live-scoreboard.git
cd live-scoreboard
```

2. Install dependencies:
```bash
npm init -y
npm install ws
```

## Running the Application

1. Start the WebSocket server:
```bash
node websocket-server.js
```

2. Open `server.html` and `client.html` in separate browser windows

## How to Use

### Server Page (`server.html`)
- Click "Add Team" to create new teams
- Update team scores in real-time
- Delete teams as needed

### Client Page (`client.html`)
- Displays live, sorted scoreboard
- Automatically updates when scores change

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.