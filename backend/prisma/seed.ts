import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  max: 5,
});
const prisma = new PrismaClient({ adapter });

export const TEST_USER = {
  email: 'test@booknest.dev',
  password: 'TestPassword8!',
};

const cover = (slug: string) =>
  `https://placehold.co/400x600/e2e8f0/102a43?text=${slug.replace(/-/g, '+')}`;

interface BookSeed {
  title: string;
  slug: string;
  isbn: string;
  description: string;
  price: string;
  comparePrice?: string;
  pages: number;
  publicationYear: number;
  condition: 'NEW' | 'USED';
  authorName: string;
  categorySlug: string;
  publisherName: string;
}

const books: BookSeed[] = [
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
    authorName: 'J.R.R. Tolkien',
    categorySlug: 'fiction',
    publisherName: 'HarperCollins',
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
    authorName: 'J.R.R. Tolkien',
    categorySlug: 'fantasy',
    publisherName: 'HarperCollins',
  },
  {
    title: 'Murder on the Orient Express',
    slug: 'murder-on-the-orient-express',
    isbn: '978-0-00-711931-8',
    description:
      'Hercule Poirot investigates a murder aboard a stranded luxury train in the midst of a snowstorm.',
    price: '9.99',
    pages: 256,
    publicationYear: 1934,
    condition: 'NEW',
    authorName: 'Agatha Christie',
    categorySlug: 'mystery-thriller',
    publisherName: 'Penguin Books',
  },
  {
    title: 'The Murder of Roger Ackroyd',
    slug: 'the-murder-of-roger-ackroyd',
    isbn: '978-0-00-711932-5',
    description:
      'A retired detective solves the shocking murder of a wealthy widower in a sleepy English village.',
    price: '9.49',
    pages: 320,
    publicationYear: 1926,
    condition: 'USED',
    authorName: 'Agatha Christie',
    categorySlug: 'mystery-thriller',
    publisherName: 'Penguin Books',
  },
  {
    title: 'The Alchemist',
    slug: 'the-alchemist',
    isbn: '978-0-06-250217-4',
    description:
      'A shepherd boy journeys in search of treasure, learning the wisdom of following his personal legend.',
    price: '13.99',
    pages: 208,
    publicationYear: 1988,
    condition: 'NEW',
    authorName: 'Paulo Coelho',
    categorySlug: 'fiction',
    publisherName: 'HarperOne',
  },
  {
    title: 'Eleven Minutes',
    slug: 'eleven-minutes',
    isbn: '978-0-06-058928-8',
    description:
      'A young Brazilian woman searches for love and self-discovery in Geneva.',
    price: '11.49',
    comparePrice: '15.99',
    pages: 320,
    publicationYear: 2003,
    condition: 'NEW',
    authorName: 'Paulo Coelho',
    categorySlug: 'fiction',
    publisherName: 'HarperOne',
  },
];

async function upsertCategory(slug: string, name: string, description: string) {
  return prisma.category.upsert({
    where: { slug },
    update: {},
    create: { name, slug, description },
  });
}

async function upsertAuthor(name: string, biography: string) {
  return prisma.author.upsert({
    where: { name },
    update: {},
    create: { name, biography, image: cover(name.toLowerCase().replace(/[^a-z]+/g, '-')) },
  });
}

async function upsertPublisher(name: string, description: string) {
  return prisma.publisher.upsert({
    where: { name },
    update: {},
    create: { name, description },
  });
}

async function main() {
  const categories = await Promise.all([
    upsertCategory('fiction', 'Fiction', 'Novels, stories and imaginative worlds.'),
    upsertCategory('fantasy', 'Fantasy', 'Magic, myth and epic quests.'),
    upsertCategory('mystery-thriller', 'Mystery & Thriller', 'Crime, suspense and whodunits.'),
  ]);
  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

  const authors = await Promise.all([
    upsertAuthor('J.R.R. Tolkien', 'English writer, poet and philologist, author of The Hobbit and The Lord of the Rings.'),
    upsertAuthor('Agatha Christie', 'The best-selling novelist of all time, creator of Hercule Poirot and Miss Marple.'),
    upsertAuthor('Paulo Coelho', 'Brazilian novelist best known for The Alchemist.'),
  ]);
  const authorByName = new Map(authors.map((a) => [a.name, a]));

  const publishers = await Promise.all([
    upsertPublisher('HarperCollins', 'One of the world\u2019s largest publishing houses.'),
    upsertPublisher('Penguin Books', 'Iconic paperback publisher founded in 1935.'),
    upsertPublisher('HarperOne', 'Imprint of HarperCollins publishing personal growth and spirituality titles.'),
  ]);
  const publisherByName = new Map(publishers.map((p) => [p.name, p]));

  const createdBookTitles: string[] = [];
  for (const book of books) {
    const { authorName, categorySlug, publisherName, ...data } = book;
    const record = await prisma.book.upsert({
      where: { isbn: book.isbn },
      update: { categoryId: categoryBySlug.get(categorySlug)!.id },
      create: {
        ...data,
        categoryId: categoryBySlug.get(categorySlug)!.id,
        authorId: authorByName.get(authorName)!.id,
        publisherId: publisherByName.get(publisherName)!.id,
        language: 'ENGLISH',
      },
    });
    await prisma.bookImage.upsert({
      where: { id: `seed-cover-${record.slug}` },
      update: { imageUrl: cover(record.slug) },
      create: {
        id: `seed-cover-${record.slug}`,
        bookId: record.id,
        imageUrl: cover(record.slug),
        altText: `Cover of ${record.title}`,
        isPrimary: true,
      },
    });
    createdBookTitles.push(record.title);
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

  const reviews = [
    { bookTitle: 'The Hobbit', rating: 5, comment: 'A timeless adventure — perfect for readers of every age.' },
    { bookTitle: 'The Alchemist', rating: 4, comment: 'Thought-provoking and beautifully written.' },
  ];
  const createdReviews: string[] = [];
  for (const review of reviews) {
    const bookRecord = await prisma.book.findUnique({
      where: { isbn: books.find((b) => b.title === review.bookTitle)!.isbn },
      select: { id: true },
    });
    if (!bookRecord) continue;
    const record = await prisma.review.upsert({
      where: { userId_bookId: { userId: user.id, bookId: bookRecord.id } },
      update: {},
      create: {
        userId: user.id,
        bookId: bookRecord.id,
        rating: review.rating,
        comment: review.comment,
        status: 'APPROVED',
      },
    });
    createdReviews.push(`${review.bookTitle} (${record.rating}/5)`);
  }

  console.log('Seed complete:');
  console.log(`  Categories: ${categories.map((c) => c.name).join(', ')}`);
  console.log(`  Authors:    ${authors.map((a) => a.name).join(', ')}`);
  console.log(`  Publishers: ${publishers.map((p) => p.name).join(', ')}`);
  console.log(`  Books:      ${createdBookTitles.join(', ')}`);
  console.log(`  User:       ${user.email} / ${TEST_USER.password}`);
  console.log(`  Reviews:    ${createdReviews.join('; ') || 'none'}`);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());