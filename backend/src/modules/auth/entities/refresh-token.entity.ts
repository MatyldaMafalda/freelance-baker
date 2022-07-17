import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { EntityName } from "enums/entity-names.enum";
import { User } from "modules/user/user.entity";

@Entity({ name: EntityName.RefreshToken })
export class RefreshToken {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 128 })
    token: string;

    @ManyToOne(() => User)
    user: User;
}
