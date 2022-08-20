import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const caterogies: Category[] = [];

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  caterogies.push(category);

  res.status(201).json(category);
});

export { categoriesRoutes };
