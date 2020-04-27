import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entities/User';

const app = express();
app.use(express.json);

createConnection()
.then(async connection=>{
    console.log("Conectado");
    const user = new User();
    user.firstName="Xavi";
    user.lastName="Rodríguez";
    user.isActive=true;
    connection.manager
        .save(user)
        .then(user=>console.log("Usuario creado"+user.id))
        .catch(error=>console.error(error));
}).catch(error=>console.error(error));

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});