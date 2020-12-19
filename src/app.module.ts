import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, PostsModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
