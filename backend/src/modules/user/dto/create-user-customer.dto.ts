import { User } from "modules/user/user.entity";
import { Exclude } from "class-transformer";
import { ApiHideProperty } from "@nestjs/swagger";

export class CreateUserCustomerDto {
    @Exclude()
    @ApiHideProperty()
    baker: string;

    constructor(partialUser: Partial<User>) {
        Object.assign(this, partialUser);
    }
}
