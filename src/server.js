import express from 'express';
import home from './routes/home';

const app = express();
const port = process.env.PORT || 8080;

app.use('/', home);

app.listen(port, () => {
  console.log(`Savanta Server listening on port ${port}!`);
});
