import { HttpService } from '@nestjs/axios';
import { Inject } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Account } from './account.model';

@Entity()
export class Customer {
  protected http: HttpService;
  constructor() {
    this.http = new HttpService();
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  auth0id: string;

  @Column()
  customerId: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Account, (account) => account.customer)
  accounts;

  email: string;

  firstName: string;

  lastName: string;

  name: string;

  @AfterLoad()
  async afterLoad() {
    return firstValueFrom(this.http.get('https://reqres.in/api/users/12')).then(
      (u) => {
        // console.log(u.data);
        this.email = u.data.data.email;
        this.firstName = u.data.data.first_name;
        this.lastName = u.data.data.last_name;
        this.name = this.firstName + ' ' + this.lastName;
      },
    );
  }

  @BeforeInsert()
  insertLogic() {
    this.createdAt = this.updatedAt = new Date();
  }
  @BeforeUpdate()
  updateLogic() {
    this.createdAt = new Date();
  }
}
