const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const states = [
  {
    id: 1,
    name: "Madhya Pradesh",
    capital: "Bhopal",
  },
  {
    id: 2,
    name: "Maharashtra",
    capital: "Mumbai",
  },
  {
    id: 3,
    name: "Rajasthan",
    capital: "Jaipur",
  },
  {
    id: 4,
    name: "Gujarat",
    capital: "Gandhinagar",
  },
  {
    id: 5,
    name: "Uttar Pradesh",
    capital: "Lucknow",
  },
  {
    id: 6,
    name: "Bihar",
    capital: "Patna",
  },
  {
    id: 7,
    name: "West Bengal",
    capital: "Kolkata",
  },
  {
    id: 8,
    name: "Tamil Nadu",
    capital: "Chennai",
  },
  {
    id: 9,
    name: "Kerala",
    capital: "Thiruvananthapuram",
  },
  {
    id: 10,
    name: "Odisha",
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
