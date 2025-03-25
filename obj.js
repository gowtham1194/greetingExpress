const express = require('express');
const app = express();
app.use(express.json());


const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

//POST 
app.post('/users', (req, res) => {
  const newUser = req.body; 

  if (newUser.id && newUser.name) {
    users.push(newUser); 
    res.status(201).json({ message: 'User added' }); 
  } else {
    res.status(400).json({ error: 'Invalid user data' }); 
  }
});


app.get('/users', (req, res) => {
  res.status(200).json(users); 
});


app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
