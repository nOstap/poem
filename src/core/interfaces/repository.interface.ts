export interface IRepository<T extends { id: string }> {
    entities: T[];
    findById(id: string): T;
    create(...args: any): T;
    findAll(): T[]; 
}