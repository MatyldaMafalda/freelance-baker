import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityName } from "enums/entity-names.enum";
import { Cake } from "modules/cake/cake.entity";
import { User } from "modules/user/user.entity";

@Entity({ name: EntityName.Baker })
export class Baker {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, (user) => user.baker)
    user: User;

    @OneToMany(() => Cake, (cake) => cake.baker, { cascade: true, eager: true })
    cakes: Cake[];
}
