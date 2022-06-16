import { Controller} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BakerService } from "modules/baker/baker.service";

@ApiTags("Baker")
@Controller("bakers")
export class BakerController {
    constructor(private readonly bakerService: BakerService) {}
}
