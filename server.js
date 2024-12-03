// Importar la librería 'ws' para WebSockets
const WebSocket = require('ws');

// Crear un servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

// Manejar conexiones entrantes de WebSocket
wss.on('connection', (ws) => {
  console.log('Un cliente se ha conectado.');

  // Enviar un mensaje al cliente cuando se conecta
  ws.send('¡Bienvenido al servidor WebSocket!');

  // Escuchar mensajes enviados por el cliente
  ws.on('message', (message) => {
    console.log('Mensaje recibido: %s', message);
    // Responder al cliente
    ws.send(`Mensaje recibido: ${message}`);
  });

  // Manejar el cierre de la conexión
  ws.on('close', () => {
    console.log('Un cliente se ha desconectado.');
  });
});

console.log('Servidor WebSocket corriendo en ws://localhost:8080');
