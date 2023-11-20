import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
} from '../types/auth/types';
import * as process from 'process';
import { jwtToken, loginResponse } from '../utils';

// DEMO CODE

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(
    @Body() loginRequestInfo: LoginRequest,
    @Res({ passthrough: true }) responseObj,
  ): LoginResponse {
    // DEMO CODE
    if (
      loginRequestInfo.username === process.env.USERNAME &&
      loginRequestInfo.password === process.env.PASSWORD
    ) {
      responseObj.cookie('jwt', jwtToken(), {
        httpOnly: true,
      });
      return loginResponse();
    }
    responseObj.status(400);
  }
  @Post('/me')
  me(@Req() req, @Res({ passthrough: true }) res): LoginResponse {
    return loginResponse();
  }
  @Post('/logout')
  logout(@Req() req, @Res({ passthrough: true }) res): LogoutResponse {
    res.clearCookie('jwt');
    return { result: 'sucess' };
  }
}
