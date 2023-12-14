import { Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";

@Entity()
export class usb_sticks extends BaseEntity {
  @PrimaryColumn()
  "name": string;
  @Column()
  "located": string;
  @Column()
  "belongesTo": string;
  @Column()
  "bootable": number;
  @Column()
  "order_id": string;
  @Column()
  related_vehicle: string;
  @Column()
  "comments": string;
  @Column({ default: 1 })
  quantity: number;
}
