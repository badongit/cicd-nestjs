import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am working with Docker! I have changed this message.';
  }

  sayHi(): string {
    return 'Hi! I am commit 2';
  }

  sayTestRebase(): string {
    return 'Test rebase!';
  }
}
