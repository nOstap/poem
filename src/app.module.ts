import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoemModule } from './poem/poem.module';
import { EventSourcingModule } from './event-sourcing/event-sourcing.module';

@Module({
  imports: [PoemModule, EventSourcingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
