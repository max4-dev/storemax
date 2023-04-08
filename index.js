import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation, goodsValidation } from './validations.js';
import { UserController, GoodsController } from './controllers/index.js';
import chechAuth from './utils/chechAuth.js';

mongoose
  .connect(
    'mongodb+srv://maksimBogomyakov:www.storemax123@cluster0.mxkipny.mongodb.net/store?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/auth/register', registerValidation, UserController.register);
app.post('/auth/login', loginValidation, UserController.login);
app.get('/auth/me', chechAuth, UserController.getMe);

app.get('/goods', GoodsController.getAll);
app.get('/goods/:id', GoodsController.getOne);
app.post('/goods', chechAuth, goodsValidation, GoodsController.create);
app.delete('/goods/:id', chechAuth, GoodsController.remove);
app.patch('/goods/:id', chechAuth, GoodsController.update);

app.listen(4444, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server is running');
});
