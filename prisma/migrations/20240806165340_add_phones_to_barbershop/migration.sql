/*
  Warnings:

  - You are about to drop the column `phone` on the `Barbershop` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `date` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "phone",
ADD COLUMN     "phones" TEXT[];

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
