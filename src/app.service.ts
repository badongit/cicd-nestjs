import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am working with Docker! I have changed this message.';
  }

  sayHi(): string {
    return 'Hi!';
  }

  sayTestMerge(): string {
    return 'Test merge!';
  }
}
