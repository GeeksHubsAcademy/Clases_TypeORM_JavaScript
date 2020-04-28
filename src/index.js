import express from 'express';
import { getConnectionManager, createConnection, getCustomRepository } from 'typeorm';
import { User } from './entities/User';
import { UserRepository } from './repositories/userRepository';

const app = express();
app.use(express.json);


const repo = async ()=>{
const connection = await createConnection();
const userRepository = new getCustomRepository(UserRepository);
const userCreated = await userRepository.createUser("xavi","rodriguez",true);
console.log("Usuario Creado", userCreated);
const user = await userRepository.findByName("Xavi");
console.log("Usuario recuperado", user);
const userMod = await userRepository.updateName(2,"pepe");
console.log("Usuario modificado", userMod)
console.log("Eliminado", await userRepository.deleteUser(1));
}

repo();

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});