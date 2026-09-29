const express = require("express");

const app = express();

app.use(express.json());

const states = [
  {
    id: 1,
    state: "Madhya Pradesh",
    capital: "Bhopal",
  },
  {
    id: 2,
    state: "Maharashtra",
    capital: "Mumbai",
  },
  {
    id: 3,
    state: "Rajasthan",
    capital: "Jaipur",
  },
  {
    id: 4,
    state: "Gujarat",
    capital: "Gandhinagar",
  },
  {
    id: 5,
    state: "Uttar Pradesh",
    capital: "Lucknow",
  },
  {
    id: 6,
    state: "Bihar",
    capital: "Patna",
  },
  {
    id: 7,
    state: "West Bengal",
    capital: "Kolkata",
  },
  {
    id: 8,
    state: "Tamil Nadu",
    capital: "Chennai",
  },
  {
    id: 9,
    state: "Kerala",
    capital: "Thiruvananthapuram",
  },
  {
    id: 10,
    state: "Odisha",
    capital: "Bhubaneswar",
  },
];

// Home route

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Indian States API",
  });
});

// Get all States
app.get("/api/states", (req, res) => {
  res.json(states);
});

//Get one state
app.get("/api/states/:id", (req, res) => {
  const id = Number(req.params.id);
  const state = states.find((state) => state.id === id);

  if (!state) {
    return res.status(404).json({
      message: "State not found",
    });
  }

  res.json(state);
});

// Server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
