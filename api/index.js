const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

app.set('port',9000);

app.use('/agendamento',require('./src/routes/aluno.routes'))

app.listen(app.get('port'), () => {
    console.log(`api na porta ${app.get('port')}`);
});