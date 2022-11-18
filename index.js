import * as url from 'url';
import express from 'express';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url)); // LO debemos hacer porque cuando usamos import type module, no se tiene acceso de manera primitiva a __dirname
// por eso creamos esta linea jutno con import * as url from 'url'

// PAra enviar un archivo, no se necesita el fs de node, ya que express ya tiene algo propio para ello

const app = express(); // app viene a ser el server.

// Estos metodos de app (express) deben ser antes de las rutas, si no, no entenderá lo que viene del front
app.use(express.text()); // Permite decodificar body tipo texto
app.use(express.json()); // Permite decodificar body tipo json
app.use(express.urlencoded({extended: false})) // Pueda entender formularios, datos nada complicados con extended false (en postman: x-www-form-urlencoded)

app.get('/', (req,res) => {
    res.send('hello world');
})
// sending a img, file, video, audio
app.get('/file', (req,res) => {
    res.sendFile('./js.png' , {root:__dirname})
})

// sending info from user
app.get('/user', (req,res) => {
    const user = {
        name:"greg",
        ape:"sans",
        hobbies: [
          'program'
        ],
        address:{
            street:"av",
            num:4
        }
    }
    res.json(user)
})

app.get('/products', (req,res) => {
    // validate data
    // query a database
    // process data
    res.send('listing products')
})

app.post('/product', (req, res) => {
    console.log(req.body);
    res.send('posting a product');
})

app.put('/products', (req, res) => {
    res.send('updating a product');
})

app.delete('/products', (req, res) => {
    res.send('deleting a product');
})

// Solo envía código de estado sin contenido
// Con el 204, express no envía contenido, por mucho que se concatene el metodo end o send => sendStatus(204).end('hola) ó status(204).send('hola)
app.get('/is_alive', (req,res) => {
    res.sendStatus(204);
})
app.listen(3000);
console.log('listening on port 3000');
