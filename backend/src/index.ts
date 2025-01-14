import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import bodyParser from "body-parser";
import { getCodeSandboxHost } from "@codesandbox/utils";
import axios from 'axios';

const backendPort = 3000;
const frontendPort = 5173;
const backendUrl = `https://localhost:${backendPort}`;
const frontendUrl = `http://localhost:${frontendPort}`;

const app = express();

const SECRET = "c2804b11-3ad4-4a3a-a63c-8502aa1a9633";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = {
  id: 1,
  username: 'testuser',
  password: 'password123' 
};


// Login route
app.post('/login', (req, res) => {
  const { userName, password } = req.body;

  if (userName !== user.username || password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, 'jwt_secret', { expiresIn: '1h' });
  res.json({ token, user: { username: user.username } });

});

app.get('/pokemon', async (req, res) => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  const parsedData = {
    count: response.data.count,
    next: response.data.next,
    previous: response.data.previous,
    results: response.data.results,
};
  res.json(parsedData)
})

function authenticateJWT(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.headers['authorization'];

  if (token) {
      jwt.verify(token, 'jwt_secret', (err, user) => {
          if (err) {
              return res.sendStatus(403); // Forbidden
          }
          next();
      });
  } else {
      res.sendStatus(401); // Unauthorized
  }
}

app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route', user });
});



app.listen(backendPort, () => {
  console.log(`Pokédex backend running on port ${backendPort}`);
});
