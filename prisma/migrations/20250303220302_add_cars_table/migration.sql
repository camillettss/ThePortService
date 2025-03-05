-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dailyRate" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
