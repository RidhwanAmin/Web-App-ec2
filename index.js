import express from 'express';

const app = express();

app.listen(8080, () => console.log('API running on port 8080'))

app.get('/', (req, res) => res.json('AWS'))