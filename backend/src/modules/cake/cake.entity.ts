import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntityName } from "enums/entity-names.enum";
import { CakeCategory } from "modules/cake/enums/cake-category.enum";
import { Baker } from "modules/baker/baker.entity";

@Entity({ name: EntityName.Cake })
export class Cake {
    @PrimaryGeneratedColumn()
    id: string;

    @Column("varchar", { length: 128 })
    name: string;

    @Column("varchar", { length: 255 })
    description: string;

    @Column("decimal", { precision: 8, scale: 2 })
    price: number;

    @Column("tinyint")
    isBirthday: boolean;

    @Column({ type: "enum", enum: CakeCategory, name: "category" })
    category: CakeCategory;

    @ManyToOne(() => Baker)
    baker: Baker;
}
