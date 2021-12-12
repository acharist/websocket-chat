const WebSocket = require("ws");
const port = 8080;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (data) => {
    // console.log(`Client has sent us: ${data}`)
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`${data}`);
      }
    });
  });
  ws.on('close', () => {
    console.log(`Client ${ws.id} has disconnected!`);
  });
  ws.onerror = function () {
    console.log('Some Error occurred');
  };
});

console.log(`The WebSocket server is running on port ${port}`);
