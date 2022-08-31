import { Category } from '../models/Category';
import { ICreateCategoryDTO } from './implementations/CategoriesRepository';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findAll(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
