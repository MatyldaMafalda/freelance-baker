import { IsString, MinLength } from "class-validator";

export class ResetPasswordDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsString()
    resetToken: string;
}
