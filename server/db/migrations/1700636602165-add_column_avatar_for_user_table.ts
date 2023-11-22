import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnAvatarForUserTable1700636602165 implements MigrationInterface {
    name = 'AddColumnAvatarForUserTable1700636602165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
    }

}
