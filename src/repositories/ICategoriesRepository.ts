import { Category } from '../models/Category';
import { ICreateCategoryDTO } from './CategoriesRepository';

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findAll(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICategoriesRepository };
