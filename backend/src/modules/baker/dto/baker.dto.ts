import { Cake } from "modules/cake/cake.entity";

export class CakeDto extends Cake {
    constructor(cake: Cake) {
        super();
        Object.assign(this, cake);
    }
}
