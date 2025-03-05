/*
  Warnings:

  - You are about to drop the column `dailyRate` on the `Car` table. All the data in the column will be lost.
  - Added the required column `pricePerDay` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "dailyRate",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "pricePerDay" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "RentalBooking" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RentalBooking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RentalBooking" ADD CONSTRAINT "RentalBooking_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
