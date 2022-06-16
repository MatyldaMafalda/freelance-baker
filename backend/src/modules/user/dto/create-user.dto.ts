import { CreateBakerDto } from "modules/baker/dto/createBaker.dto";
import { Role } from "modules/user/enums/role.enum";

export class CreateUserDto {
    name: string;
    lastname: string;
    email: string;
    password: string;
    role: Role;
    baker?: CreateBakerDto;
}
