import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import express from 'express';

const app = express();


app.get('/', (req,res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(3000);
console.log('listening on port 3000');
