import express from 'express';
import fs from 'fs';
import https from 'https';

const key = fs.readFileSync('private.key');
const certificate = fs.readFileSync('certificate.crt');

const app = express();

app.listen(8080, () => console.log('API running on port 8080'))

app.get('/', (req, res) => {
    res.send('AWS');
  });
  