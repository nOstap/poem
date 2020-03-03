import { IRepository } from './../interfaces/repository.interface';
export abstract class AbstractRepository<T extends { id: string }> implements IRepository<T> {
  entities: T[];

  findById(id: string): T {
    return this.entities.find(item => item.id === id);
  }
  
  abstract create(...args: any): T;
  
  findAll(): T[] {
    return this.entities;
  }
}
