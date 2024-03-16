import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am working with Docker! Now i am testing cicd for this app.';
  }
}
