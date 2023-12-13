import { BaseEntity, Repository } from "typeorm";
import { cables } from "../Entities/cables";

export class baseServiceClass<T> {
  private readonly entity: Repository<T>;

  constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  insert = async (newProduct: T) => {
    try {
      this.entity.create(newProduct);
      return await this.entity.save(newProduct);
    } catch (error) {
      console.error(error);
    }
  };

  getAll = async (table) => {
    try {
      const AllCables = await this.entity.find(table);
      return AllCables;
    } catch (error) {
      console.error(error);
    }
  };

  deleteById = async (table, id) => {
    try {
      await this.entity.delete(id);

      return this.getAll(table);
    } catch (error) {
      console.error(error);
    }
  };

  update = async (itemToUpdate) => {
    try {
      return await this.entity.update(itemToUpdate.id, itemToUpdate);
    } catch (error) {
      console.error(error);
    }
  };
}
