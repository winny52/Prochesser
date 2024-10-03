import prisma from "./prismaClient";

async function main() {
  const packages = [
    {
      name: "beginner",
      description:
        "For absolute beginners who need a strong foundation in the basics of chess. Start here, and master the rules, movement of the pieces, and basic tactics. You'll build a solid groundwork that will prepare you for more advanced strategies.",
      price: 19.99,
    },
    {
      name: "intermediate",
      description:
        "For those who know the basics but want to take their gameplay to the next level. Dive into advanced tactics, develop middlegame strategies, and refine your chess intuition.",
      price: 39.99,
    },
    {
      name: "advanced",
      description:
        "Designed for serious learners ready to compete at high levels. Covers deep strategies and complex endgames, preparing you to face strong opponents and potentially enter competitive chess.",
      price: 69.99,
    },
  ];

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { name: pkg.name },
      update: {},
      create: pkg,
    });
  }

  console.log("Packages seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
