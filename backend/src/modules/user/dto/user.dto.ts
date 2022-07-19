import { Exclude } from "class-transformer";
import { User } from "modules/user/user.entity";
import { ApiHideProperty } from "@nestjs/swagger";

export class UserDto {
    @Exclude()
    @ApiHideProperty()
    password: string;

    constructor(partialUser: Partial<User>) {
        Object.assign(this, partialUser);
    }
}
