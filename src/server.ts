import express, { Request, Response } from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log('Server started on port 3333'));
