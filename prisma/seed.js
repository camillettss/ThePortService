import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.car.createMany({
    data: [
      { name: "Fiat Panda", pricePerDay: 30, image: "/panda.jpg" },
      { name: "Audi A3", pricePerDay: 50, image: "/audi.jpg" },
      { name: "BMW X1", pricePerDay: 70, image: "/bmw.jpg" }
    ]
  });

  console.log("Auto aggiunte al database!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
