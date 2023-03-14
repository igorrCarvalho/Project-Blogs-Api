const express = require('express');
const { login } = require('./controllers/usersControllers');
const { validateUserEntries } = require('./middlewares/validateUserEntries');

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

// ...

app.post('/login', validateUserEntries, login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
