const express = require('express');
const app = express();
app.use(express.json());

// This handles the mathematical engine calculation logic
app.post('/api/payroll/calculate-shift', (req, res) => {
  const { hourlyRate, hoursWorked } = req.body;
  if (hourlyRate < 0 || hoursWorked < 0) {
    return res.status(400).json({ errorMsg: 'Values cannot be negative' });
  }
  const netCalculation = hourlyRate * hoursWorked; 
  res.status(200).json({ netCalculation });
});

module.exports = app;