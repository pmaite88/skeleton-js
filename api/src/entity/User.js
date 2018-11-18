import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique
} from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column('varchar')
  firstName = '';

  @Column('varchar')
  lastName = '';

  @Column('varchar')
  email = '';

  @Column('varchar')
  password = '';
}
