import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { EntityName } from "enums/entity-names.enum";
import { Role } from "modules/user/enums/role.enum";
import { RefreshToken } from "modules/auth/entities/refresh-token.entity";
import { Baker } from "modules/baker/baker.entity";
import { Exclude } from "class-transformer";

@Entity({ name: EntityName.User })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 128 })
    name: string;

    @Column("varchar", { length: 128 })
    lastname: string;

    @Column("varchar", { unique: true, length: 128 })
    email: string;

    @Column("varchar", { length: 128 })
    password: string;

    @Column({ type: "enum", enum: Role, name: "role" })
    role: Role;

    @OneToOne(() => Baker, (baker) => baker.user, { nullable: true, cascade: true, eager: true })
    @JoinColumn()
    baker?: Baker;

    @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user, { cascade: true })
    refreshTokens: RefreshToken[];
}
