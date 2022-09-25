import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    if (!file) {
      return res.sendStatus(400);
    }

    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}

export { ImportCategoryController };
