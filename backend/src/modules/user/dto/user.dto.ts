import { OmitType } from "@nestjs/swagger";
import { User } from "modules/user/user.entity";

export class UserDto extends OmitType(User, ["password"] as const) {
    constructor(user: User) {
        super();
        Object.assign(this, user, { password: undefined });
    }
}
