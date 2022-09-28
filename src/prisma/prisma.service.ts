import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Global,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:123@localhost:5432/auth?schema=public',
        },
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (err) {
      console.log(err);
      await this.$disconnect();
      process.exit(1);
    }
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
