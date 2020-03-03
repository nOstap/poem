import { AuthorsModule } from './authors/authors.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoemModule } from './poem/poem.module';

@Module({
  imports: [PoemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
