import express from 'express';
import router from './routes/airports.js';

const app = express();
const PORT = 3000;

app.use('/airports', router);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
