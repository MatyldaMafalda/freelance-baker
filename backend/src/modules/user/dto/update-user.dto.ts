import { PartialType } from "@nestjs/swagger";
import { CreateUserCustomerDto } from "modules/user/dto/create-user-customer.dto";

export class UpdateUserDto extends PartialType(CreateUserCustomerDto) {}
