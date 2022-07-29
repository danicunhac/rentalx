import { Router } from 'express';

const categoriesRoutes = Router();

const caterogies = [];

categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body;

  const category = {
    name,
    description,
  };

  caterogies.push(category);

  res.status(201).json(category);
});

export { categoriesRoutes };
