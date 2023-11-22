import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableCategory1700663890650 implements MigrationInterface {
    name = 'UpdateTableCategory1700663890650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`thumbnail\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`thumbnail\` varchar(255) NOT NULL`);
    }

}
