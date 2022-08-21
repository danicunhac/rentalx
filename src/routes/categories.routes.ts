import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.findAll();

  return res.json(categories);
});

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  {
    /**
     * Creating a category service with a PostgresCategoriesRepository
     * that implements the ICategoriesRepository interface.
     */
    const categoriesRepository = new PostgresCategoriesRepository();

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );

    createCategoryService.execute({ name, description });
  }

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const category = createCategoryService.execute({ name, description });

  res.status(201).json(category);
});

export { categoriesRoutes };
