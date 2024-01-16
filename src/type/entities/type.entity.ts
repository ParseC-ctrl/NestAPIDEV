import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Type {
  @PrimaryGeneratedColumn('uuid', { name: 'type_id' })
  typeId: string;

  @Column({ name: 'type_name' })
  typeName: string;

  @CreateDateColumn({
    name: 'create_time',
  })
  createTime: Date;

  @UpdateDateColumn({
    name: 'update_Time',
  })
  updateTime: Date;
}
