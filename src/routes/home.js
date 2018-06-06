import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world. It\'s working');
});

export default router;
