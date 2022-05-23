import { IsEmpty, IsOptional } from 'class-validator';
import {
  Entity,
  Column,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from './country.model';
import { Customer } from './customer.model';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  accountId: string;

  @IsEmpty()
  @Column()
  createdAt: Date;

  @IsEmpty()
  @Column()
  updatedAt: Date;

  @IsOptional()
  @ManyToOne(() => Customer, (customer) => customer.accounts)
  customer;

  @IsOptional()
  @ManyToOne(() => Country)
  country;

  @BeforeInsert()
  insertLogic() {
    this.createdAt = this.updatedAt = new Date();
  }
  @BeforeUpdate()
  updateLogic() {
    this.createdAt = new Date();
  }
}
