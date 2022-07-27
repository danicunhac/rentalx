import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.post('/courses', (req, res) => {
  const { name } = req.body;

  return res.send({ name });
});

app.listen(3333, () => console.log('Server started on port 3333'));
