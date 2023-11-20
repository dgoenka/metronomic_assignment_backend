import { LoginResponse } from '../types/auth/types';
import * as process from 'process';

export const jwtToken = () => process.env.JWT_TOKEN;
export const loginResponse: () => LoginResponse = () =>
  JSON.parse(process.env.USER_DATA) as unknown as LoginResponse;
