# WebSockets Demo

[![Nuestro video explicando el repositorio](https://youtu.be/r0A8pXuZo_0)]([https://www.youtube.com/watch?v=VIDEO_ID](https://youtu.be/r0A8pXuZo_0))


*Nuestro video de YouTube explicando el repositorio*

## Introducción

Este repositorio es una demostración de cómo utilizar WebSockets para manejar una cola de conexiones en un servidor. Los WebSockets permiten una comunicación bidireccional en tiempo real entre el cliente y el servidor, lo que es ideal para aplicaciones que requieren actualizaciones instantáneas.

Esta demo ha sido realizada por **Adrián Romero Romero** y **Joan Cerveto Serrano** para la asignatura de **ADI (Aplicaciones Distribuidas en Internet)** con el profesor **Otto** en la **Universitat d'Alacant** durante el curso **2024-2025**.

## Ejecución del Servidor

Para ejecutar el servidor, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/jcerveto/introduccion_websockets.git
    cd introduccion_websockets/backend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el servidor:
    ```bash
    npm start
    ```

El servidor estará escuchando en el puerto `3000`.

## Ejecución del Frontend

Para ejecutar el cliente WebSocket, abre el archivo `index.html` en tu navegador:

1. Navega al directorio del frontend:
    ```bash
    cd ../frontend
    ```

2. Abre el archivo `index.html` en tu navegador preferido.

## Ejecución de Tests

Para ejecutar los tests, sigue estos pasos:

1. Asegúrate de que el servidor esté en ejecución.

2. Navega al directorio del backend:
    ```bash
    cd backend
    ```

3. Ejecuta el script de test:
    ```bash
    node test.js
    ```

Esto creará múltiples clientes de prueba que se conectarán al servidor y enviarán mensajes.

## Enlaces Útiles

- [Documentación de Socket.IO](https://socket.io/docs/)
- [Documentación de Express](https://expressjs.com/)

¡Esperamos que esta demo te sea útil para entender cómo funcionan los WebSockets y cómo puedes utilizarlos en tus propias aplicaciones!
