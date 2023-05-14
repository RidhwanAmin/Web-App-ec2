import express from 'express';

const app = express();

app.listen(8080, () => console.log('API running on port'))

app.get('/', (req, res) => res.json('AWS'))