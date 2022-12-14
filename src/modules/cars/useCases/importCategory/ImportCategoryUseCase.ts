import fs from 'fs';
import { parse as csvParse } from 'csv-parse';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      console.log('line', line);
    });
  }
}

export { ImportCategoryUseCase };
