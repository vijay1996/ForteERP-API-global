import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import ProcessOperation from './process/DynamicSelect.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

//processOperation
app.post('/forte/:application/:screen/:call/:search?', (req, res) => ProcessOperation(req, res));

app.listen(port, () => {
  console.log(`[server]: ForteERP-API-global is running at http://localhost:${port}`);
});