import * as url from 'url';
import express from 'express';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url)); // LO debemos hacer porque cuando usamos import type module, no se tiene acceso de manera primitiva a __dirname
// por eso creamos esta linea jutno con import * as url from 'url'


const app = express(); // app viene a ser el server.

/**
 * res.sendFile Una forma de enviar un html directo al cliente
 */
app.get('/first_reverse', (req,res) => {
    res.sendFile('./static/first_reverse.html', {
        root: __dirname // dice la ruta completa desde el root del proyecto
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
app.get('/', (req,res)=> { // req recibe informacion del cliente, res es el repsonse
    res.send('hello world'); // puede ser sendFile (lee un archivo y lo envia al front)
})

app.get('/about', (req,res) => {
    res.send('acerca de');
});

app.get('/help', (req,res) => {
    res.send('ayuda');
});

// debe ser la ruta final || Al no encontrar pag que coincida, cae aqui.
app.use((req,res)=> {
    res.status(404).send('page not found');
})

//
// app.listen(3000);
// console.log('listening on port 3000');
