import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Tag } from './tags';

@Entity()
export class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @ManyToMany(() => Tag, (tag) => tag.tools)
  tags: Tag[];
}
