const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Olá mundo! Este é meu primeiro pipeline de entrega contínua, porém agora ele necessita de revisão para ser publicado'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
