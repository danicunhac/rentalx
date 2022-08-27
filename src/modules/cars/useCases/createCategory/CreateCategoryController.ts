import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    const category = this.createCategoryUseCase.execute({ name, description });

    return res.status(201).json(category);
  }
}

export { CreateCategoryController };
