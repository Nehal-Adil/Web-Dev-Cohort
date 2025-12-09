import app from './app.js';
import dotenv from 'dotenv';
import prisma from './db/client.js';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`✅ BookBazaar API running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
async function gracefulShutdown(signal) {
  console.log(`${signal} recieved. Shutting down...`);
  server.close(async () => {
    await prisma.$disconnect();
    console.log('🔌 Prisma connection closed. Goodbye!');
    process.exit(0);
  });
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
