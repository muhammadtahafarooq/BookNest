require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcrypt');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  max: 5,
});
const prisma = new PrismaClient({ adapter });

const TEST_USER = {
  email: 'test@booknest.dev',
  password: 'TestPassword8!',
};

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: 'fiction' },
    update: {},
    create: {
      name: 'Fiction',
      slug: 'fiction',
      description: 'Novels, stories and imaginative worlds.',
    },
  });

  const author = await prisma.author.upsert({
    where: { name: 'J.R.R. Tolkien' },
    update: {},
    create: {
      name: 'J.R.R. Tolkien',
      biography:
        'English writer, poet and philologist, best known as the author of The Hobbit and The Lord of the Rings.',
      image: 'https://placehold.co/400x600/e2e8f0/102a43?text=Tolkien',
    },
  });

  const publisher = await prisma.publisher.upsert({
    where: { name: 'HarperCollins' },
    update: {},
    create: {
      name: 'HarperCollins',
      description: 'One of the world\u2019s largest publishing houses.',
    },
  });

  const books = [
    {
      title: 'The Hobbit',
      slug: 'the-hobbit',
      isbn: '978-0-547-92822-7',
      description:
        'Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor.',
      price: '14.99',
      comparePrice: '19.99',
      pages: 310,
      publicationYear: 1937,
      condition: 'NEW',
    },
    {
      title: 'The Fellowship of the Ring',
      slug: 'the-fellowship-of-the-ring',
      isbn: '978-0-547-92821-0',
      description:
        'The first volume of The Lord of the Rings: the Ring must be destroyed in the fires of Mount Doom.',
      price: '16.99',
      pages: 423,
      publicationYear: 1954,
      condition: 'NEW',
    },
    {
      title: 'The Silmarillion',
      slug: 'the-silmarillion',
      isbn: '978-0-547-92955-2',
      description: 'The ancient drama of the First Age of Middle-earth.',
      price: '12.49',
      pages: 365,
      publicationYear: 1977,
      condition: 'USED',
    },
  ];

  const createdBooks = [];
  for (const book of books) {
    const record = await prisma.book.upsert({
      where: { isbn: book.isbn },
      update: {},
      create: {
        ...book,
        categoryId: category.id,
        authorId: author.id,
        publisherId: publisher.id,
        language: 'ENGLISH',
      },
    });
    await prisma.bookImage.upsert({
      where: { id: `seed-cover-${record.slug}` },
      update: { imageUrl: `https://placehold.co/400x600/e2e8f0/102a43?text=${record.title.replace(/\s+/g, '+')}` },
      create: {
        id: `seed-cover-${record.slug}`,
        bookId: record.id,
        imageUrl: `https://placehold.co/400x600/e2e8f0/102a43?text=${record.title.replace(/\s+/g, '+')}`,
        altText: `Cover of ${record.title}`,
        isPrimary: true,
      },
    });
    createdBooks.push(record.title);
  }

  const hashedPassword = await bcrypt.hash(TEST_USER.password, 12);
  const user = await prisma.user.upsert({
    where: { email: TEST_USER.email },
    update: {},
    create: {
      firstName: 'Test',
      lastName: 'User',
      email: TEST_USER.email,
      password: hashedPassword,
      phone: '+92 300 1234567',
    },
  });

  console.log('Seed complete:');
  console.log(`  Category: ${category.name} (${category.slug})`);
  console.log(`  Author:   ${author.name}`);
  console.log(`  Publisher: ${publisher.name}`);
  console.log(`  Books:    ${createdBooks.join(', ')}`);
  console.log(`  User:     ${user.email} / ${TEST_USER.password} (role: ${user.role})`);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());