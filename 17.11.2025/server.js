const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// In-memory storage
let users = [];
let nextId = 1;

// Helper: generate one fake user
function generateFakeUser(id) {
  return {
    id,
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 90 }),
    profession: faker.person.jobTitle()
  };
}

// Generate 100 fake users on startup
for (let i = 0; i < 100; i++) {
  users.push(generateFakeUser(nextId++));
}

// ROUTES

// GET /users -> return all users (with optional ?limit=&offset=)
app.get('/users', (req, res) => {
  const limit = parseInt(req.query.limit) || users.length;
  const offset = parseInt(req.query.offset) || 0;

  const result = users.slice(offset, offset + limit);

  res.json({
    count: result.length,
    total: users.length,
    data: result
  });
});

// GET /users/:id -> return user by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// POST /users -> create new user
app.post('/users', (req, res) => {
  const { name, surname, age, profession } = req.body;

  // Basic validation
  if (!name || !surname || !profession) {
    return res.status(400).json({ error: 'Missing required fields: name, surname, profession' });
  }

  const ageNum = Number(age);
  if (Number.isNaN(ageNum) || ageNum < 0 || ageNum > 150) {
    return res.status(400).json({ error: 'Invalid age' });
  }

  const newUser = {
    id: nextId++,
    name,
    surname,
    age: ageNum,
    profession
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// Root healthcheck
app.get('/', (req, res) => {
  res.send('Fake Users API is running. Try GET /users');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
