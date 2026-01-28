import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { CustomersModule } from './customers/customers.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [HealthModule, CustomersModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
