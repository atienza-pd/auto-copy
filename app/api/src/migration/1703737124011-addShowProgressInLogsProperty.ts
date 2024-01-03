import { MigrationInterface, QueryRunner } from "typeorm";

export class addShowProgressInLogsProperty1703737124011 implements MigrationInterface {
    name = 'addShowProgressInLogsProperty1703737124011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_copy_path" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "source" varchar NOT NULL, "destination" varchar NOT NULL, "includeFiles" varchar NOT NULL, "excludedDirectories" varchar NOT NULL, "excludedFiles" varchar NOT NULL, "activeDaysOfWeek" varchar, "showProgressInLogs" boolean NOT NULL DEFAULT (0))`);
        await queryRunner.query(`INSERT INTO "temporary_copy_path"("id", "name", "source", "destination", "includeFiles", "excludedDirectories", "excludedFiles", "activeDaysOfWeek") SELECT "id", "name", "source", "destination", "includeFiles", "excludedDirectories", "excludedFiles", "activeDaysOfWeek" FROM "copy_path"`);
        await queryRunner.query(`DROP TABLE "copy_path"`);
        await queryRunner.query(`ALTER TABLE "temporary_copy_path" RENAME TO "copy_path"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "copy_path" RENAME TO "temporary_copy_path"`);
        await queryRunner.query(`CREATE TABLE "copy_path" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "source" varchar NOT NULL, "destination" varchar NOT NULL, "includeFiles" varchar NOT NULL, "excludedDirectories" varchar NOT NULL, "excludedFiles" varchar NOT NULL, "activeDaysOfWeek" varchar)`);
        await queryRunner.query(`INSERT INTO "copy_path"("id", "name", "source", "destination", "includeFiles", "excludedDirectories", "excludedFiles", "activeDaysOfWeek") SELECT "id", "name", "source", "destination", "includeFiles", "excludedDirectories", "excludedFiles", "activeDaysOfWeek" FROM "temporary_copy_path"`);
        await queryRunner.query(`DROP TABLE "temporary_copy_path"`);
    }

}
