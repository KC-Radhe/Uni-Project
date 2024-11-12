const express = require('express');
const connect = require('./config/databaseMdB');
const apiRouter = require('./routes/index');


const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('server on')
});

app.listen(PORT, () => {
    console.log(`server listening on- http://127.0.0.1:${PORT}`);
    connect();
});