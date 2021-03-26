import {MigrationInterface, QueryRunner} from "typeorm";

export class prueba1616776059936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`_id` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, `created_at` datetime NOT NULL, `update_at` datetime NOT NULL, PRIMARY KEY (`_id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
