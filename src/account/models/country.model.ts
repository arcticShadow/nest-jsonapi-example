import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryColumn()
  countryId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
