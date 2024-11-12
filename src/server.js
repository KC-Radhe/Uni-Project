const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('server on')
});

app.listen(PORT, () => {
    console.log(`server listening on- http://127.0.0.1:${PORT}`);
});