const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/payroll/calculate-shift', (req, res) => {
  const { hourlyRate, hoursWorked } = req.body;
  if (hourlyRate < 0 || hoursWorked < 0) {
    return res.status(400).json({ errorMsg: 'Values cannot be negative' });
  }
  const rawCalculation = hourlyRate * hoursWorked; 
  // This explicitly cuts off the .0025 fraction and forces it to 241.41
  const netCalculation = Number(rawCalculation.toFixed(2));
  res.status(200).json({ netCalculation });
});

module.exports = app;