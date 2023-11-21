import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LabsModule } from './labs/labs.module';
import * as process from 'process';
import { LabSchema } from './schemas/labs/lab.schema';
import { HealthcareprovidersModule } from './healthcareproviders/healthcareproviders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL, { dbName: 'test' }),
    AuthModule,
    LabsModule,
    HealthcareprovidersModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      '/auth/me',
      '/auth/logout',
      // COMMENT THE FOLLOWING LINES TO MAKE THEM
      // '/labs/add',
      // '/healthcareproviders/*',
    );
  }
}
