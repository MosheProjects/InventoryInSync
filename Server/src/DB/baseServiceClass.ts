import { Repository } from "typeorm";

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
      await this.entity.update(
         itemToUpdate.order_id,
        itemToUpdate
      );
      return await this.entity.find(itemToUpdate.order_id);
    } catch (error) {
      console.error(error);
    }
  };
}
