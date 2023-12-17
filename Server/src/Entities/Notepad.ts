import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Notepad extends BaseEntity {
  @PrimaryGeneratedColumn(uuidv4)
  id: string;
  @Column()
  note: string;
}
