import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnRefreshTokenForUserTable1700624305546 implements MigrationInterface {
    name = 'UpdateColumnRefreshTokenForUserTable1700624305546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refreshToken\` \`refreshToken\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refreshToken\` \`refreshToken\` varchar(255) NOT NULL`);
    }

}
