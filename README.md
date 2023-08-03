# Frontend Tickets Aéreos

Realizado en Vue Js para construir un pequeño aplicativo que muestre una interfaz para busqueda de vuelos y luego presente los resultados en otra interfaz a través de rutas.

## Instalación y uso

Se puede ejecutar de 2 formas (En ambos casos se debe estar en la carpeta que contiene el proyecto):

1) Con [Docker](https://www.docker.com/), el cual debe estar instalado antes de ejecutar el proyecto, luego, seguir los siguientes pasos:
   
     Ejecutar el comando para  construir la imagen del proyecto:
     ```
     docker build -t node-vue .
     ```
     Después, para levantar el contenedor:
     ```
     docker run -it -p 8080:8080 node-vue
     ```
     Finalmente, abrir el navegador de su preferencia y escribir:
     ```
     http://localhost:8080/
     ```     

2) Directamente en el equipo anfitrión, para lo cual se necesita instalar previamente [Node Js](https://nodejs.org/en)
    
   Primero, se debe instalar las dependencias necesarias para el proyecto, 
   mediante el siguiente comando:
   ```
   npm install
   ```
   Luego, se debe ejecutar el proyecto:
   ```
   yarn serve
   ```
   Finalmente, abrir el navegador y escribir:
   ```
   http://localhost:8080/
   ```  

## License

[MIT](https://choosealicense.com/licenses/mit/)