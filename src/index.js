import express from 'express';
import { createConnection } from 'typeorm';

const app = express();
app.use(express.json);

createConnection()
.then(async connection=>{
    console.log("Conectado");
}).catch(error=>console.error(error));


app.listen(3000, () => {
    console.log('Ready on port 3000!');
});