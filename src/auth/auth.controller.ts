import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {LoginRequest, LoginResponse, LogoutResponse} from "../types/auth/types";

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";
const loginResponse = {
    "id": 15,
    "username": "kminchelle",
    "email": "kminchelle@qq.com",
    "firstName": "Jeanne",
    "lastName": "Halvorson",
    "gender": "female",
    "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1",
};
@Controller('auth')
export class AuthController {
    @Post("/login")
    login(@Body() loginRequestInfo:LoginRequest, @Res({ passthrough: true }) responseObj):LoginResponse{
        if((loginRequestInfo.username==="kminchelle")&&(loginRequestInfo.password==="0lelplR")){
            responseObj.cookie('jwt', jwtToken, {httpOnly: true});
            return loginResponse;
        }
        responseObj.status(400);
    }
    @Post("/me")
    me(@Req() req, @Res({passthrough: true}) res):LoginResponse{
        const jwt = req.cookies["jwt"];
        if(jwt===jwtToken) return loginResponse;
        res.status(400);
    }
    @Post("/logout")
    logout(@Req() req, @Res({passthrough: true}) res):LogoutResponse{
        const jwt = req.cookies["jwt"];
        if(jwt===jwtToken) {
            res.clearCookie('jwt');
            return {result: "sucess"};
        }
        res.status(400);
    }
}
