import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BuildJsonLocation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    location: string;
}
