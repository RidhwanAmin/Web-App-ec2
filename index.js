import express from 'express';

const app = express();

app.listen(80, () => console.log('API running on port'))

app.get('/', (req, res) => res.json('AWS'))