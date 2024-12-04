# Proyecto WebSocket en JavaScript

Este proyecto implementa un servidor WebSocket sencillo utilizando la librería **ws** en Node.js. El servidor WebSocket permite la conexión de un cliente que puede enviar y recibir mensajes en tiempo real.

## Estructura del Proyecto

- **`index.js`**: El servidor WebSocket que maneja las conexiones entrantes y la comunicación con los clientes.
- **`index.html`**: Una página web sencilla que actúa como cliente WebSocket para conectarse al servidor y enviar/recibir mensajes.

## Requisitos

Asegúrate de tener instalado **Node.js** y las siguientes dependencias:

```bash
npm install
```
## Instalación

1. Clona el repositorio y navega al directorio del proyecto:
```bash
git clone <https://github.com/kevinseya/websocket_js.git>
```
2. Instala las dependencias necesarias:
```bash
npm install
```
3. Ejecuta el servidor WebSocket con el siguiente comando:
```bash
node index.js
```
El servidor WebSocket estará disponible en ws://localhost:8080

## Uso del Cliente WebSocket
- Abre el archivo index.html en tu navegador.
- Haz clic en el botón Conectar para establecer la conexión con el servidor WebSocket.
- El cliente enviará un mensaje al servidor y mostrará cualquier mensaje recibido en la página web.

## Funcionalidad

- Servidor WebSocket (index.js):
        * Escucha en el puerto 8080 para las conexiones entrantes.
        * Cuando un cliente se conecta, se envía un mensaje de bienvenida.
        * Los mensajes recibidos del cliente son registrados y respondidos.
        * Cuando un cliente se desconecta, se registra en la consola.
- Cliente WebSocket (index.html):
        * Permite conectar al servidor WebSocket al hacer clic en el botón Conectar.
        * Envía un mensaje al servidor al establecerse la conexión.
        * Muestra los mensajes recibidos desde el servidor en tiempo real.
