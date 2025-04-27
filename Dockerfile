# Stage 1: Build
FROM node:16-alpine AS build

# Directorio donde se mantendrán los archivos de la app
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json en nuestro WORKDIR
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todos los archivos
COPY . .

# Construir la aplicación lista para producción
RUN npm run build --configuration=production

# Stage 2: Run
FROM nginx:1.28.0-alpine

# Copiar desde la "Etapa" build el contenido de la carpeta build/
# dentro del directorio indicado en nginx
COPY --from=build /usr/src/app/dist/back-office-juegos-serios /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
