import { PrismaClient } from "@prisma/client";

declare global {
  // This ensures that TypeScript recognizes `globalThis.prisma`
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
