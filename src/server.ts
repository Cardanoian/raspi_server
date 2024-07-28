// src/server.ts

import express, { Request, Response } from 'express';

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Route with parameter
app.get('/greet/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
