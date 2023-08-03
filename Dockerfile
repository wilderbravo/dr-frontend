# Establece la imagen base
FROM node:lts-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json a la carpeta de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto 8080 que utiliza Vue.js por defecto
EXPOSE 8080

# Comando para iniciar la aplicación cuando el contenedor se ejecute
CMD ["npm", "run", "serve"]