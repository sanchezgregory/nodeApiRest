to Install nodejs
video de este codigo: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=35s

1. nodejs.org
2. con el comando node entramos a la consola de nodejs
3. process es un objeto global del sistema operativo
4. process.version / process.versions.v8 / os / os.userInfo() / process.cwd()
5. Al utilizar type:modules no está disponible __direname o __dirfile
   1. y para usarlo se debe instalar npm i url
   2. e importar esto en los archivos que se requieran 
      1. import * as url from 'url'; 
      2. const __filename = url.fileURLToPath(import.meta.url); 
      3. const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

