// src/lib/db.ts

import {PrismaClient} from '@prisma/client';
// import { PrismaClient } from '../generated/prisma/index.js'; // <- ESM requires .js extension
    
export const prismaClient = new PrismaClient();

