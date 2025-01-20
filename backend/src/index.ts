import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import bodyParser from "body-parser";
import { getCodeSandboxHost } from "@codesandbox/utils";
import axios from 'axios';
import { users } from "./data/users";

const backendPort = 3000;
const frontendPort = 5173;
const backendUrl = `https://localhost:${backendPort}`;
const frontendUrl = `http://localhost:${frontendPort}`;

const app = express();

const SECRET = "c2804b11-3ad4-4a3a-a63c-8502aa1a9633";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Login route


// Base URL for DummyJSON API
const DUMMY_JSON_API = 'https://dummyjson.com/products';

// Route to get all products
app.get('/api/product-ids', async (req, res) => {
    try {
        const response = await axios.get(DUMMY_JSON_API);
       const ids =  response.data.products.map((product: { id: number }) => product.id);
        res.json(ids);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Route to get a single product by ID
app.get('/api/product-details/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const response = await axios.get(`${DUMMY_JSON_API}/${productId}`);
        const productDetails = {
          id: response.data.id,
          title: response.data.title,
          category: response.data.category,
          price: response.data.price,
          discountPercentage: response.data.discountPercentage,
          images: response.data.images 
        };
    
        res.json(productDetails);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Error fetching product' });
    }
});

// Route to get a single product by ID
app.get('/api/product-description/:id', async (req, res) => {
  const productId = req.params.id;
  try {
      const response = await axios.get(`${DUMMY_JSON_API}/${productId}`);
      res.json({ description: response.data.description, id: response.data.id });
  } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Error fetching product' });
  }
});


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
  res.json({ message: 'This is a protected route', users });
});



app.listen(backendPort, () => {
  console.log(`Product backend running on port ${backendPort}`);
});
