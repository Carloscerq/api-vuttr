import { Entity, Column, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tool } from './tool.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Tool, (tool) => tool.tags)
  tools: Tool[];
}
