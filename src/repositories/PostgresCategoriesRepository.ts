import { Category } from '../models/Category';
import { ICreateCategoryDTO } from './CategoriesRepository';
import { ICategoriesRepository } from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category {
    throw new Error('Method not implemented.');
  }
  findAll(): Category[] {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Category | undefined {
    throw new Error('Method not implemented.');
  }
}

export { PostgresCategoriesRepository };
