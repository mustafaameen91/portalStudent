/*
  Warnings:

  - You are about to drop the column `motherName` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `relationships` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `religion` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collegeNumber]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `motherName` to the `NationalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `NationalInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Student_mail_key` ON `Student`;

-- AlterTable
ALTER TABLE `NationalInfo` ADD COLUMN `motherName` VARCHAR(220) NOT NULL,
    ADD COLUMN `religion` VARCHAR(220) NOT NULL;

-- AlterTable
ALTER TABLE `Student` DROP COLUMN `motherName`,
    DROP COLUMN `password`,
    DROP COLUMN `phone`,
    DROP COLUMN `relationships`,
    DROP COLUMN `religion`,
    MODIFY `englishName` VARCHAR(220) NOT NULL DEFAULT 'englishName',
    MODIFY `mail` VARCHAR(220) NOT NULL DEFAULT 'student@duc.edu.iq';

-- CreateIndex
CREATE UNIQUE INDEX `Student_collegeNumber_key` ON `Student`(`collegeNumber`);

-- RenameIndex
ALTER TABLE `Address` RENAME INDEX `Address_studentId_unique` TO `Address_studentId_key`;

-- RenameIndex
ALTER TABLE `NationalInfo` RENAME INDEX `NationalInfo_studentId_unique` TO `NationalInfo_studentId_key`;

-- RenameIndex
ALTER TABLE `StudentGraduation` RENAME INDEX `StudentGraduation_studentId_unique` TO `StudentGraduation_studentId_key`;

-- RenameIndex
ALTER TABLE `StudentSchool` RENAME INDEX `StudentSchool_studentId_unique` TO `StudentSchool_studentId_key`;
