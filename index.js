import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express';

const app = express();

/**
 * res.sendFile  Una forma de enviar un html directo al cliente
 */
app.get('/sendFile', (req,res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})
/**
 * res.end   Una forma de enviar estilo http
 * El cliente de esta forma no sabe exactamente que es, y agrega el contenido en etiquetas <pre>
 */
app.get('/end', (req, res) => {
    res.end('Hello world');
});
/**
 * res.send es la forma como lo hace por defecto express
 * y el cliente lo interpreta y lo recibe entre etiquetas <text>
 */
app.get('/', (req,res)=> {
    res.send('hello world');
})

// Al no encontrar pag que coincida, cae aqui.
app.use((req,res)=> {
    res.send('page not found');
})


app.listen(3000);
console.log('listening on port 3000');
