import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailForUserTable1700551351023 implements MigrationInterface {
    name = 'AddEmailForUserTable1700551351023'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
