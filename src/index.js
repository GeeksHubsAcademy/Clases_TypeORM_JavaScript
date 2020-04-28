import express from 'express';
import { getConnection, createConnection, getCustomRepository, InsertQueryBuilder } from 'typeorm';
import { User } from './entities/User';
import { UserRepository } from './repositories/userRepository';

const app = express();
app.use(express.json);

const transcationFunction = async()=>{

    const connection = await createConnection();
    const queryRunner = connection.createQueryRunner();

    //Estableciendo la conexión
    await queryRunner.connect();

    //Iniciando la transacción.

    await queryRunner.startTransaction();
  
    try{
        const user= new User();
        user.firstName="Rafa";
        user.lastName="Rodriguez";
        user.isActive = true;
        //Confirmando la conexión.
        await queryRunner.manager.save(user);
         await queryRunner.commitTransaction();
         console.log("Guardado usuario");
    }catch(err){
        //Tirando hacía atrás la conexión.
        await queryRunner.rollbackTransaction();
        console.error(err);
    }finally{
        //Cerrando la conexión.
        await queryRunner.release();
    }




}

transcationFunction();





/*
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
*/

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});