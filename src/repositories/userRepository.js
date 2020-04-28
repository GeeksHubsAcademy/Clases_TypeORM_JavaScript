import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository{

    async findByName(firstName){
        return await this.findOne({firstName});
    }

   async updateName(id, firstName){
        const user = await this.findOne(id);
        if (!user)  return null;
        user.firstName = firstName;
        return await this.update(id, user);
    }

    async createUser(firstName, lastName, isActive){
        const user = new User();
        user.firstName= firstName.toUpperCase();
        user.lastName = lastName.toUpperCase();
        user.isActive = isActive;

        return await this.save(user);
    }

    async deleteUser(id){
        return await this.delete(id);
    }
    

}