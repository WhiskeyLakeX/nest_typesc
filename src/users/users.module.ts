import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entity/user.entity';
import { AuthenticationModule } from '../common/authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // forwardRef(() => AuthenticationModule),
    AuthenticationModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
