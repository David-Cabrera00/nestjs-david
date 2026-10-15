import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductosController } from './productos/productos.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'tasks_user',
      password: 'tasks_password',
      database: 'my_tasks_db',
      autoLoadEntities: true,
      synchronize: true,
      entities: [],
    }),
    UsersModule,
  ],
  controllers: [ProductosController],
})
export class AppModule {}
