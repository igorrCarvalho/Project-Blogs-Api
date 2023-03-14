const express = require('express');
const { login } = require('./controllers/usersController');
const { validateUserEntries } = require('./middlewares/validateUserEntries');

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postRouter);

// ...

app.post('/login', validateUserEntries, login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
