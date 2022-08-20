import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = categoriesRepository.create({ name, description });

  res.status(201).json(category);
});

export { categoriesRoutes };
