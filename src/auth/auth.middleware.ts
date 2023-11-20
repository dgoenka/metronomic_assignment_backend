import { Injectable, NestMiddleware } from '@nestjs/common';
import { jwtToken } from '../utils';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const jwt = req.cookies['jwt'];
    if (jwt === jwtToken()) next();
    else {
      res.status(400);
      res.json({ result: 'unauthorised' });
    }
  }
}
