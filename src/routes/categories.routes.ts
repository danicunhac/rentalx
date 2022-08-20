import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.findAll();

  return res.json(categories);
});

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  {
    const category = categoriesRepository.findByName(name);

    if (category) {
      return res.status(400).json({ error: 'Category already exists.' });
    }
  }

  const category = categoriesRepository.create({ name, description });

  res.status(201).json(category);
});

export { categoriesRoutes };
