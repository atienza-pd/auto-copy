import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CopyPath {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  source!: string;
  @Column()
  destination!: string;
  @Column()
  includeFiles!: string;
  @Column()
  excludedDirectories!: jkkkkkk;
  @Column()
  excludedFiles!: string;
  @Column({
    nullable: true,
  })
  activeDaysOfWeek?: string;
  @Column({default: false})
  showProgressInLogs!: boolean;
}
