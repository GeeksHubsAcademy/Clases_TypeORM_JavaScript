import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entities/User';

const app = express();
app.use(express.json);

createConnection()
.then(async connection=>{
    console.log("Conectado");
    const user = new User();
    user.firstName="Juan";
    user.lastName="Pérez";
    user.isActive=false;

    const userRepository = await connection.getRepository("user");
    //Obtenemos todos los registros.
    const users= await userRepository.find();
    console.log("Uusarios" , users);
    //Obtenemos un registro podemos indicar us id.
    const userOne = await userRepository.findOne(6);
    console.log("Un unico usuario" , userOne);
    //Obtenemos los registros que cumpla unas condiciones.
    const usersActive = await userRepository.find({isActive:false});
    console.log("Usuarios inactivos",usersActive);
    //Obtener todos los registros y el número total.
    const [allUsers, numberUsers] = await userRepository.findAndCount();
    console.log("Usuarios:",allUsers);
    console.log("Número total de usuarios", numberUsers);
    //Obtener usuarios ordenados por id desc
    const usersOrderById = await userRepository.find({order:{id:"DESC"}});
    console.log("Usuarios ordenados de forma descednete", usersOrderById);


    connection.manager
        .save(user)
        .then(user=>console.log("Usuario creado"+user.id))
        .catch(error=>console.error(error));
    
}).catch(error=>console.error(error));

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});