import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductosController } from './productos/productos.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [ProductosController],
})
export class AppModule {}
