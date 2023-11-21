import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumnForUserTable1700553571972 implements MigrationInterface {
    name = 'AddNewColumnForUserTable1700553571972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refreshToken\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refreshToken\``);
    }

}
